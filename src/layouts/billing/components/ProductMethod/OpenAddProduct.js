import { Grid } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import './modalAddProduct.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({handleClose, open}) {
    const { reset, register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch("https://sleepy-journey-86126.herokuapp.com/addProducts", {
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
      };

  return (
    <div>
 
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className='modalAddProduct'>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              ADD NEW PRODUCT
            </Typography>
             <Box>
             <Grid item className="text-left" xs={12} md={12}>
            <form className="text-left ms-2" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="width mt-3"
                required
                type="text"
                {...register("name")}
                placeholder="  Name*"
              />{" "} 
              <input
                className="width mt-3" 
                type="number"
                {...register("oldPrice")}
                placeholder="  Old price*"
              />{" "} 
              <input
                className="width mt-3"
                required
                type="text"
                {...register("updatePrice")}
                placeholder="  Update price*"
              />{" "} 
              <input
                className="width mt-3"
                required
                type="text"
                {...register("rating")}
                placeholder="  Rating 5*"
              />{" "} 
              <input
                className="width mt-3"
                required
                type="text"
                {...register("vendor")}
                placeholder="  Vendor* "
              />{" "} 
              <input
                className="width mt-3"
                required
                {...register("img")}
                placeholder="  Image url*"
              />{" "} 
              <textarea
                className="text-from description width mt-3"
                required
                {...register("description")}
                placeholder="  Description*"
              />{" "} 
               <select {...register("category")} className='mt-1 mb-3'>
                 <option value="digitalWatch">  Digital Watch</option>
                 <option value="phoneCover">Phone Cover</option>
                 <option value="headphone">Headphone</option>
               </select> <br/>
              <input
                className="submit-from width buttons ps-4 pe-4 p-2 mt-2"
                type="submit"
              />
            </form>
            ;
          </Grid>
             </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
