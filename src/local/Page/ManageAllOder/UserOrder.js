import ClearIcon from '@mui/icons-material/Clear';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Container, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import useAuth from "Firebase/Hooks/useAuth";
import ReviewModel from "local/Review/Review";
import Footer from 'local/Sheard/Footer';
import ShortNav from "local/Sheard/Navbar.short";
import { default as React, Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import './Order.css';



function UserOrder() {
    const [open, setOpen] = useState(false);
    const { user } = useAuth(); 
    const email = user.email;
    const [oderProduct, setOderProduct] = useState([]); 
    const [order, setOrder] = useState([]); 
    const [isDelete, setIsDelete] = useState(false);
    const navigate = useNavigate(); 
    const handleOpen = (data) => {
      setOrder(data)
      setOpen(true)
    };
    const handleClose = () => setOpen(false);
  
    useEffect(() => {
      fetch(`https://sleepy-journey-86126.herokuapp.com/userOder/${email}`,{
        headers:{
          'authorization':`Bearer ${localStorage.getItem('idToken')}`
        }
      })
        .then((res) => { 
          if(res.status == 200){
            return res.json();
          }
          else if(res.status === 401){
            navigate('/authentication/sign-in')
          }
        })
        .then((data) => setOderProduct(data));
    }, [user,isDelete]);

    const handleDeleteOrders = (id) => {
      const url = `https://sleepy-journey-86126.herokuapp.com/userOder/${id}`;
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((result) => { 
              if (result.deletedCount) {
                setIsDelete(true);
              } else {
                setIsDelete(false);
              }
            });
        }
      });
    };
    
    return (
         <Fragment>
           <div className="d-grid">
            <Box className="orderHeader d-flex">
                <Box className=" col-md-9 col-sm-12 orderNav">
                    <ShortNav title="Orders"></ShortNav>
                </Box>
            </Box>
            {
              oderProduct.length?
              <Container className="col-12  mb-5 pb-5">
              <TableContainer className='mt-5 p-2' component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">PRODUCT </TableCell>
                      <TableCell align="right">PRODUCT NAME</TableCell>
                      <TableCell align="right">PRICE</TableCell>
                      <TableCell align="right">EMAIL</TableCell>
                      <TableCell align="right">ODER</TableCell>
                      <TableCell align="right">APPROVED</TableCell>
                      <TableCell align="right">DELETE ORDERS </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {oderProduct.map((oder) => (
                      <TableRow
                        key={oder._id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          <ListItemAvatar align="right">
                            <Avatar alt="Remy Sharp" src={oder.url} />
                          </ListItemAvatar>
                        </TableCell>
                        <TableCell align="right" component="th" scope="row">
                          {oder.name}
                        </TableCell>
     
                        <TableCell align="right">{oder.price} € </TableCell>
                        <TableCell align="right">{oder.userEmail}</TableCell>
                        <TableCell align="right">{oder.state}</TableCell>
                        <TableCell align="right">
                          <Button
                            onClick={()=> handleOpen(oder)}
                            variant="outlined"
                            disabled={oder.state == "Pending.."}
                          >
                            Review Your Product
                          </Button>
                        </TableCell>
                        <TableCell align="right">
                          <Button
                            onClick={() => handleDeleteOrders(oder._id)}
                            variant="outlined"
                            color="error"
                          >
                            <ClearIcon/>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
           </Container>
           :
           <Container className='boxOrders d-grid'> 
           <Box className="d-flex">
             <ShoppingCartIcon/>
             <Typography variant="h6" component="div">
                No Orders 
             </Typography> 
             </Box>
             <Typography variant="subtitle2" gutterBottom>
              {user.displayName}
             </Typography>
             <Typography variant="caption" display="block" gutterBottom>
                You haven't submitted any cards for grading yet.
                Click the button below to get started.
             </Typography>
           </Container>
           } 
        </div>
           <ReviewModel
              oderProduct={order}
              open={open}
              handleClose ={handleClose}
              handleOpen={handleOpen}
            ></ReviewModel>
        <Footer></Footer>
         </Fragment>
    )
}

export default UserOrder
