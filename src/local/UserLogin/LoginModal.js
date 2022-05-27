import { Fade, TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Firebase/Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginModal = ({ handleClose, open, booking, date }) => {
  // Post API Stp.P.2 [client sit data server site post]
  const [loginData, setLoginData] = useState({});
  const { loginUser, user, authError, signImWithGoogle } = useAuth();

  // Login return to the Private Page
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    // console.log(newLoginData);
  };

  const handelLogin = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    handleClose()

    e.preventDefault();
  };

  const handelGoogleSignIn = (e) => {
    signImWithGoogle(location, navigate)
    handleClose()
  };

  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="spring-modal-title" variant="h6" component="h2">
            LOGIN
          </Typography>

          <form onSubmit={handelLogin}>
            <TextField
              sx={{ width: "90%", m: 1 }}
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
              sx={{ width: "90%", m: 1 }}
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
            <br />
            <Button
              type="submit"
              sx={{ width: "30%", m: 1 }}
              variant="contained"
            >
              Submit
            </Button>
          </form>

          <p>----------------------- or --------------------</p>
          <Button
            sx={{ width: "90%" }}
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
        </Box>
      </Fade>
    </Modal>
  );
};

export default LoginModal;
