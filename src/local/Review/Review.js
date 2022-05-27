import { Fade } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
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

const ReviewModel = ({ handleClose, open,oderProduct}) => {
  const { user } = useAuth();
  const { reset, register, handleSubmit } = useForm();
  const [value, setValue] = useState(null);
  // console.log('value', value)
 

  const name = user.displayName;
  const img = user.photoURL; 

  const onSubmit = (data) => {
    // console.log('photoURL',data )
    data.userName = name;
    data.userImg = img;
    data.productName = oderProduct.name
    data.productUrl= oderProduct.url
    data.rating= value;
    fetch("https://sleepy-journey-86126.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Your Order Successfully Send");
          reset();
        }
      });
    // console.log(data);
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
          <form className="text-left ms-2" onSubmit={handleSubmit(onSubmit)}>
            <br />
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Typography component="legend">Product Rating </Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue)
                }}
              />
            </Box>
            <input
              className="width"
              type="text"
              {...register("rating")}
              value={value}
              placeholder={value} 
            />{" "}
            <br /> <br />
            <textarea
              className="text-from description width"
              {...register("description")}
              placeholder="Description"
            />{" "}
            <br /> <br />
            <input
              className="submit-from width buttons ps-4 pe-4 p-2"
              type="submit"
            />
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ReviewModel;
