import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router";
import OderPlaceModel from "../../OderPlace/OderPlaceModale";
import "./productDTL.css";

// const style = {
//   backgroundColor: "black",
//   color: "Black",
//   border: "1px solid black",
// };
const ProductDTL = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedvalue, setSelectedValue] = useState({});
  // console.log('selectedValue', selectedvalue)


  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-journey-86126.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProduct(data.find((data) => data._id === productId)));
  }, [productId]);

  const handleChange = (event) => {
    setSelectedValue(event)
 }
  return (
    <>
      <div className="row text-left m-3 mt-5">
        <div className="col-md-6 col-sm-12">
          <img src={product?.img} width="100%" alt="" />
        </div>
        <div className="col-md-6 col-sm-12">
          <Typography variant="h4" className="mb-2" component="h4">
            {product?.name}
          </Typography>
          <Typography variant="h5" className="mb-2" component="h4">
            {product?.updatePrice} € 
          </Typography>
          <Rating
            className="Rating mb-3"
            initialRating={product?.rating}
            emptySymbol="fa fa-star-o fa-2x Rating"
            fullSymbol="fa fa-star fa-2x Rating"
            fractions={2}
            readonly
          />{" "}
          <Typography
            variant="p"
            sx={{ fontFamily: "Monospace" }}
            component="p"
          >
            Vendor : <span> This Site</span>
          </Typography>
          <Typography variant="p" component="p">
            Product Type : <span sx={{ fontFamily: "Monospace" }}> {product.vendor}</span>
          </Typography>
          <div className="text-left mt-3">
            <h4>Size</h4>
            <div className="row">
            <div className="width20">
             <label  className="card" onClick={()=> handleChange('S')}>
                  <input 
                         style={{marginTop:'14px', display:'none'}}
                         type="radio" 
                         className="radio" 
                         default="checked"
                         name="plan"
                         checked />
                   <div className=" plan-details">
                         S
                  </div> 
             </label>
             </div>

             <div className="width20">
             <label  className="card" onClick={()=> handleChange('M')}>
                  <input 
                         style={{marginTop:'14px', display:'none'}}
                         type="radio" 
                         className="radio" 
                         default="checked"
                         name="plan"
                         checked   />
                   <div className=" plan-details">
                         M
                  </div> 
             </label>
             </div>

             <div className="width20">
             <label  className="card" onClick={()=> handleChange('L')}>
                  <input 
                         style={{marginTop:'14px', display:'none'}}
                         type="radio" 
                         className="radio" 
                         default="checked"
                         name="plan"
                         checked  />
                   <div className=" plan-details">
                    
                        L
                  </div> 
             </label>
             </div>
            </div>

          </div>
          <br />
          <Button onClick={handleOpen} variant="contained">
            ADD TO CART
          </Button>
          <Grid container spacing={2} className=" p-3 mt-4">
            <Grid item xs={12} md={5} className="row product-left-top-div m-1">
              <div className="col-md-3 col-sm-3 ">
                <i class="fab fa-shopify  cart-icon"></i>
              </div>
              <div className="col-md-9 col-sm-9">
                <h5>Free Delivery</h5>
                <p>Lorem Ipsum dummy</p>
              </div>
            </Grid>
            <Grid item xs={12} md={5} className="row product-left-top-div m-1">
              <div className="col-md-3 col-sm-3">
                <i class="fas fa-rupee-sign cart-icon"></i>
              </div>
              <div className="col-md-9 col-sm-9">
                <h5>Big Savings</h5>
                <p>Lorem Ipsum dummy</p>
              </div>
            </Grid>
            <Grid item xs={12} md={5} className="row product-left-top-div m-1">
              <div className="col-md-3 col-sm-3">
                <i class="far fa-user cart-icon"></i>
              </div>
              <div className="col-md-9 col-sm-9">
                <h5>Customr Support</h5>
                <p>Lorem Ipsum dummy</p>
              </div>
            </Grid>
            <Grid item xs={12} md={5} className="row product-left-top-div m-1">
              <div className="col-md-3 col-sm-3">
                <i class="fas fa-gift cart-icon"></i>
              </div>
              <div className="col-md-9 col-sm-9 ">
                <h5>Gift Voucher</h5>
                <p>Lorem Ipsum dummy</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="text-left m-5  ">
        <h2>DESCRIPTION</h2>
        <div className="  pt-2">{product?.description}</div>
      </div>
      <OderPlaceModel
        product={product}
        open={open}
        selectedvalue={selectedvalue}
        handleClose={handleClose}
        handleOpen ={handleOpen}
      ></OderPlaceModel>
    </>
  );
};

export default ProductDTL;
