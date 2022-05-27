import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Firebase/Hooks/useAuth";


const Register = () => {
  const [loginData, setLoginData] = useState({});
  // console.log( 'newLoginData',loginData);
  const { registerUser} = useAuth();
  const navigate = useNavigate()


//   Register Input value
  const handleonBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    // console.log( newLoginData);
  };

//   Register Button
  const handelRegister = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match!");
      return;
    }
    // Register Firebase
    registerUser(loginData.email, loginData.password, loginData.name,loginData.phone, loginData.addres, navigate);
    e.preventDefault();
  };

  return (
    <Grid
    container
    spacing={2}
    className="d-flex loginBG"
    sx={{ alignItems: "center", marginTop: 0  }}
  >
    <Container sx={{ flexGrow: 1 }}>
        {/* {!isLoading && ( */}
        <Grid item xs={12} md={8} style={{}}>
          <Typography sx={{ fontFamily: "Monospace" }} variant="h5">
          Create account
          </Typography>
          <form onSubmit={handelRegister}>
            <TextField
              sx={{ width: "50%", m: 1 }}
              id="standard-required"
              label="Your Name"
              required
              type="name"
              name="name"
              variant="standard"
              onBlur={handleonBlur}
            />{" "}
            <br />
            <TextField
              sx={{ width: "50%", m: 1 }}
              id="standard-required"
              required
              label="Email"
              type="email"
              name="email"
              variant="standard"
              onBlur={handleonBlur}
            />
            <br />
            <TextField
              sx={{ width: "50%", m: 1 }}
              id="standard-required"
              required
              label="Phone Number"
              type="number"
              name="phone"
              variant="standard"
              onBlur={handleonBlur}
            />
            <br />
            <TextField
              sx={{ width: "50%", m: 1 }}
              id="standard-required"
              required
              label="Address"
              type="addres"
              name="addres"
              variant="standard"
              onBlur={handleonBlur}
            />
            <br />
            <TextField
              sx={{ width: "50%",m: 1 }}
              id="standard-password-input"
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              variant="standard"
              onBlur={handleonBlur}
            />{" "}
            <br />
            <TextField
              sx={{ width: "50%",m: 1 }}
              id="standard-password-input"
              label="ReType Password"
              type="password"
              name="password2"
              autoComplete="current-password"
              variant="standard"
              onBlur={handleonBlur}
            />{" "}
            <br />
            <br />
            <Button type="submit" sx={{ width: "50%",m: 1 }} variant="contained">
              Submit
            </Button>
          </form>
          <br />
          <NavLink style={{ textDecoration: "none" }} to="/authentication/sign-in">
            <Button variant="text"   sx={{ fontFamily: "Monospace", fontWeight: 1000 }}>Already Have an Account? Please LOGIN</Button>
          </NavLink>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
        {/* )} */}
        </Container>
      </Grid>
   );
};

export default Register;
