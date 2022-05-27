import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
 
 

export default function AllOderProduct() {
    const [orders, setOrders] = useState([{}]);
    // console.log('orders',orders); 
    const [isUpdate, setIsUpdate] = useState(null);
    const [isDelete, setIsDelete] = useState(false);


    React.useEffect(() => {
      fetch("https://sleepy-journey-86126.herokuapp.com/allOder")
        .then((res) => res.json())
        .then((data) => setOrders(data ));
    }, [ isUpdate,isDelete]);


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
                // console.log("dltId", result);
                if (result.deletedCount) {
                  setIsDelete(true);
                } else {
                  setIsDelete(false);
                }
              });
          }
        });
      };

    const handleUpdateOrders = (id) => {
        // console.log("id", id);
        id.state = "Approved";
        const url = `https://sleepy-journey-86126.herokuapp.com/updateOrder/${id._id}`;
        fetch(url, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(id),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.modifiedCount) {
              alert("Update Successful");
              setIsUpdate(true);
            } else {
              setIsUpdate(false);
            }
          });
      };

 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          {/* <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right"> (g)</TableCell>
            <TableCell align="right"> (g)</TableCell>
            <TableCell align="right"> (g)</TableCell>
          </TableRow> */}
        </TableHead>
        <TableBody>
          {orders?.map((row) => ( 
            <TableRow
              key={row?._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                 
              <TableCell component="th" scope="row" style={{fontWeight:"500",color:"#344767"}}>
              <img
                   src={row.url} 
                   loading="lazy"
                   width="10%"
                 />
                {row?.name}
              </TableCell>
              <TableCell align="right" style={{fontWeight:"500",color:"#344767"}}>{row?.price}$</TableCell>
              <TableCell align="right" style={{fontWeight:"500",color:"#344767"}}>{row?.userEmail}</TableCell>
              <TableCell align="right" style={{fontWeight:"500",color: row.state == "Pending.." ? 'rgb(17 151 120) ' : '#344767'}}>{row?.state}</TableCell>
              <TableCell align="right"><Button variant="text" disabled={row.state == "Approved"} onClick={() => handleUpdateOrders(row)} style={{color:"rgb(38 132 213)"}}> <CheckIcon/>Accepted</Button></TableCell>
              <TableCell align="right"><Button variant="text" onClick={() => handleDeleteOrders(row._id)} style={{color:"red"}}> <DeleteIcon/>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


