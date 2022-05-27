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
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageAllOder = () => {
  const [orders, setOrders] = useState([{}]);
  // console.log('orders',orders);
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState(null);
  useEffect(() => {
    fetch("https://sleepy-journey-86126.herokuapp.com/allOder")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDelete, isUpdate]);

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
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right"> </TableCell>
              <TableCell align="right">PRODUCT NAME</TableCell>
              <TableCell align="right">PRICE</TableCell>
              <TableCell align="right">EMAIL</TableCell>
              <TableCell align="right">ODER</TableCell>
              <TableCell align="right">APPROVED</TableCell>
              <TableCell align="right">DELETE ORDERS </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((oder) => (
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

                <TableCell align="right">{oder.price}</TableCell>
                <TableCell align="right">{oder.userEmail}</TableCell>
                <TableCell align="right">{oder.state}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleUpdateOrders(oder)}
                    variant="outlined"
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleDeleteOrders(oder._id)}
                    variant="outlined"
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageAllOder;
