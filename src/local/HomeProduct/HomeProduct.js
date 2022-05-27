import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import './CardHome.css';

const HomeProduct = () => {
  const [isAllProduct, setAllProduct] = useState([]);
 


  
 

  useEffect(() => {
    fetch("https://sleepy-journey-86126.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);  
 
 

  return (
    <div className="bgColorProduct d-grid pt-3 pb-4" style={{justifyItems: 'center'}}>
      <div className="container product-row" style={{justifyContent: 'center',margin:"0"}}>
        <Typography sx={{ letterSpacing: 6,textAlign: "center" }}  className="text-danger mb-1 mt-4">THE LATEST</Typography>
        <Typography className="p-3" sx={{ fontWeight: "bold",textAlign: "center" }}>
          <h1>Fabulous Products</h1>
        </Typography>
        <Box className="row" style={{margin:"0"}}>
        {isAllProduct.filter(product => product.category === "digitalWatch").slice(0, 8).map((pd,idx)  => (
           <Box className="col-lg-3 col-md-3 col-sm-12" sx={{ padding: 0 }}>
             <Card key={idx} className="boxShadowCard m-1 ps-2 pe-2" sx={{ maxWidth: 345}}>
            <CardMedia
            className="productCardImage"
              component="img"
              width="40% !important"
              height="200"
              image={pd.img}
              alt="green iguana"
            />
             <br />  
            <Rating
              className="Rating"
              initialRating={pd.rating}
              emptySymbol="fa fa-star-o fa-2x Rating"
              fullSymbol="fa fa-star fa-2x Rating"
              fractions={2}
              readonly
              style={{fontSize: '11px'}}
            />{" "}
            <br />  
            <Typography gutterBottom variant="subtitle2" component="div" style={{fontSize:"16px"}}>
              {pd.name}
            </Typography>
            <div className="d-flex product-row">
              <p class="text-decoration-line-through">{pd?.oldPrice} {pd.oldPrice?'€' : ''}</p>
              <p class="ms-3 me-3">{pd.updatePrice} €</p>
            </div>
            <Link to={`/product/${pd._id}`} style={{textDecoration: 'none'}}>
             <button class="button-87" role="button"> Shop Now
               <span className="ms-2">
                  {" "}
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </button>
            </Link>
          </Card>
           </Box>
        ))}
        </Box>
        <Box className="row">
        <Typography className="mt-4 mb-1" sx={{ fontWeight: "bold",textAlign: "center" }}>
          <h5 className="text-left"> Accessories/ Phone/ Cover</h5>
         </Typography>

        {isAllProduct.filter(product => product.category === "phoneCover").slice(0, 6).map((pd,idx) => (
           <Box className="col-lg-2 col-md-2 col-sm-6" sx={{ padding: 0 }}>
             <Card key={idx} className="boxShadowCard m-1 ps-2 pe-2" sx={{ maxWidth: 345}}>
            <CardMedia
            className="productCardImage"
              component="img"
              width="40% !important"
              height="200"
              image={pd.img}
              alt="green iguana"
            />
             <br />  
             
            <Typography gutterBottom variant="subtitle2" component="div" style={{fontSize:"14px"}}>
              {pd.name}
            </Typography>
            <div className="d-flex product-row">
              <p class="text-decoration-line-through">{pd.oldPrice} {pd.oldPrice?'€' : ''}</p>
              <p class="ms-3 me-3">{pd.updatePrice} €</p>
            </div>
            <Link to={`/product/${pd._id}`} style={{textDecoration: 'none'}}>
              <button class="button-87" role="button" style={{fontSize:"12px"}}> Shop Now
               <span className="ms-2">
                  {" "}
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </button>
            </Link>
          </Card>
           </Box>
        ))}
          
        </Box>
        <Box className="row">
         <Typography className="mt-4 mb-1" sx={{ fontWeight: "bold",textAlign: "center" }}>
          <h5 className="text-left"> Accessories/ Headphone/ Logitech</h5>
         </Typography>
        {isAllProduct.filter(product => product.category === "headphone").slice(0, 6).map((pd,idx) => (
           <Box className="col-lg-2 col-md-2 col-sm-6" sx={{ padding: 0 }}>
             <Card key={idx} className="boxShadowCard m-1 ps-2 pe-2" sx={{ maxWidth: 345}}>
            <CardMedia
            className="productCardImage"
              component="img"
              width="40% !important"
              height="200"
              image={pd.img}
              alt="green iguana"
            />
             <br />  
              
            <Typography gutterBottom variant="subtitle2" component="div" style={{fontSize:"14px"}}>
              {pd.name}
            </Typography>
            <div className="d-flex product-row">
              <p class="text-decoration-line-through">{pd.oldPrice} {pd.oldPrice?'€' : ''}</p>
              <p class="ms-3 me-3">{pd.updatePrice} €</p>
            </div>
            <Link to={`/product/${pd._id}`} style={{textDecoration: 'none'}}> 
              <button class="button-87" role="button" style={{fontSize:"12px"}}> Shop Now
              <span className="ms-2">
                  {" "}
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </button>
            </Link>
          </Card>
           </Box>
        ))}
          
        </Box>
      </div>
    </div>
  );
};

export default HomeProduct;
