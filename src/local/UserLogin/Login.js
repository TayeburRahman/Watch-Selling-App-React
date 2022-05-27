import { Button, Container, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Firebase/Hooks/useAuth";
import "./UsersLogin.css";

const Login = () => {
  // Post API Stp.P.2 [client sit data server site post]
  const [loginData, setLoginData] = useState({});
  const { loginUser, isLoading, authError, signImWithGoogle} = useAuth();

  // Login return to the Private Page 
  const location = useLocation()
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    // console.log(newLoginData);
  };

  const handelLogin = (e) => {
    loginUser(loginData.email, loginData.password, location,navigate );
    e.preventDefault();
  };

  const handelGoogleSignIn = (e) => {
    signImWithGoogle(location, navigate)
  };
  return (
    <Grid 
    container
    spacing={2}
    className="d-flex loginBG"
    sx={{ alignItems: "center", marginTop: 0 }}
    >
      <Container className=" ">
          <Grid item xs={12} md={8}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              LOGIN
            </Typography>

            <form onSubmit={handelLogin}>
              <TextField
                sx={{ width: "50%", m: 1 }}
                id="standard-email"
                required
                label="Email"
                type="email"
                name="email"
                variant="standard"
                onChange={handleOnChange}
              />{" "}
              <br />
              <TextField
                sx={{ width: "50%", m: 1 }}
                id="standard-password-input"
                required
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                onChange={handleOnChange}
              />{" "}
              <br />
             
              <Button
                type="submit"
                sx={{ width: "20%", m: 1 }}
                variant="contained"
              >
                Submit
              </Button>
            </form>
            <br />
            <p>--------------- or ---------------</p>
            <Button
              sx={{ width: "50%" }}
              onClick={handelGoogleSignIn}
              variant="contained"
            >
              Google Sign In
            </Button>
            <br />
            <NavLink style={{ textDecoration: "none" }} to="/authentication/sign-up">
              <Button
                variant="text"
                sx={{ fontFamily: "Monospace", fontWeight: 1000 }}
              >
                New User? Please Registration.
              </Button>
            </NavLink>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
       </Container>
    </Grid>
  );
};

export default Login;
