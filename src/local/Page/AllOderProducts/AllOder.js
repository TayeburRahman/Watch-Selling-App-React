import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Firebase/Hooks/useAuth";

const AllOder = () => {
  const { user } = useAuth();
  const email = user.email;
  const [Products, setProduct] = useState([{}]);
  
  const [isDelete, setIsDelete] = useState(false); 
  // console.log('Projects', Projects)

  useEffect(() => {
    fetch("https://sleepy-journey-86126.herokuapp.com/allOder")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [email, isDelete]);
 
  return (
    <div className="">  
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {Products?.map((product,idx) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                style={{fontFamily:'monospace'}}
              >
                <TableCell component="th" scope="row">
                  <ListItemAvatar align="right">
                    <Avatar alt="Remy Sharp" src={product?.url} />
                  </ListItemAvatar>
                </TableCell>
                <TableCell  
                component="th" 
                scope="row"
                style={{color:'#3e435c',fontWeight:"600"}}
                >
                  {product?.name}
                </TableCell>

                <TableCell 
                style={{color:'#43A047',fontWeight:"600"}}
                >{product?.price}
                </TableCell>
                <TableCell 
                style={{fontFamily:'monospace', color:'#1A73E8'}}
                >{product?.state}</TableCell>
                <TableCell style={{color:"#D81B60" ,fontWeight:"600"}}>
                  {product?.Size}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllOder;
