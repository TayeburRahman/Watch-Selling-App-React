import { Alert, Box, Container } from "@mui/material";
import React, { useState } from "react";
import img from "../../image/pngtree-users.jpg";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handelOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handelSubmit = (e) => {
    const user = { email };
    fetch("https://sleepy-journey-86126.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          setEmail("");
        }
      });
    e.preventDefault();
  };
  return (
    <Box className="imgBg d-grid">
      <Box className="d-grid" style={{justifyItems: 'center'}}>
        <img src={img} width="30%" alt="" />
        <h5 className="makeAdminText">Make a New Admin</h5>
      </Box> 
      <Container >
        <form onSubmit={handelSubmit}>
          <input
            type="email"
            className="submit-input"
            id="fname"
            name="email"
            onBlur={handelOnBlur}
            placeholder="Create Admin Email"
          />{" "}
          <br />
          <input type="submit" className="submit-button" value="Submit"></input>
        </form>
        {success && (
          <Alert severity="success" className="me-5 ms-5 ">
            This Email, Admin Role Set Successfully
          </Alert>
        )}
         
      </Container>
    </Box>
  );
};

export default MakeAdmin;
