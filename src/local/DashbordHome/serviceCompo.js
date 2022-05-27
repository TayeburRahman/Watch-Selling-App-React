import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import img from "../../image/featuredbannerimage.png";

const ServiceCompo = () => {
  return (
    <div className="container mt-5 pt-3 pb-5">
      <Typography sx={{ letterSpacing: 6, textAlign: "center"}}  className="mb-1 mt-4" className="dashboardTColor" >THE PRODUCTS</Typography>
      <Typography className="p-3" sx={{ fontWeight: "bold", textAlign: "center"}}>
          <h1>Awesome Features</h1>
        </Typography> 
      <div className="m-5 pt-5">
        <Grid container spacing={0} >
          <Grid item xs={12} md={4}>
            <div className="p-3">
              <Box className="d-grid p-3" style={{justifyItems: 'center'}}>
                <i class="fas fa-running cart-icon"></i>
                <div className="d-grid" style={{justifyItems: 'center', textAlign: 'center'}}>
                  <Typography gutterBottom variant="h5" component="div">
                    Running
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                  </Typography>
                </div>
              </Box>
            </div>
            <div className="p-3">
              <Box className="d-grid p-3" style={{justifyItems: 'center'}}> 
                <div className="d-grid" style={{justifyItems: 'center', textAlign: 'center'}}>
                <img className='' src="https://i.ibb.co/fDWY6fr/icon-128x128-120x.png" width='20%' alt="BigCo Inc. logo"/>
                  <Typography gutterBottom variant="h5" component="div">
                   30 DAYS RETURN
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   Simply return it within 30 for an exchange. Contact us 200 hours.
                  </Typography>
                </div>
              </Box>
            </div>
          </Grid>
          <Grid className="d-flex" item xs={12} md={4} style={{justifyContent: 'center'}} >
            <img src={img} alt="" />
          </Grid>
          <Grid item xs={12} md={4}>
          <div className="p-3">
              <Box className="d-grid p-3" style={{justifyItems: 'center'}}>
                 <div className="d-grid" style={{justifyItems: 'center', textAlign: 'center'}}>
                 <img className='' src="https://i.ibb.co/YhPXwRW/free-delivery-64-px-2x-120x.png" width='20%' alt="BigCo Inc. logo"/>
                  <Typography gutterBottom variant="h5" component="div">
                    Free Shipping
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Free shipping on all US order or order above $100        
                  </Typography>
                </div>
              </Box>
            </div>
            <div className="p-3">
              <Box className="d-grid p-3" style={{justifyItems: 'center'}}>
                <i class="fas fa-street-view cart-icon"></i>
                <div className="d-grid" style={{justifyItems: 'center', textAlign: 'center'}}>
                  <Typography gutterBottom variant="h5" component="div">
                    Location
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    widespread group of squamate reptiles, with over 6,000
                    species
                  </Typography>
                </div>
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ServiceCompo;
