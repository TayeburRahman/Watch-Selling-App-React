import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import img from "../../image/featuredbannerimage.png";

const DashboardHome = () => {
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
              <CardActionArea className="d-grid p-3" style={{justifyItems: 'center'}}>
                <i class="fas fa-running cart-icon"></i>
                <div className="d-grid" style={{justifyItems: 'center'}}>
                  <Typography gutterBottom variant="h5" component="div">
                    Running
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                  </Typography>
                </div>
              </CardActionArea>
            </div>
            <div className="p-3">
              <CardActionArea className="d-grid p-3" style={{justifyItems: 'center'}}>
                <i class="fas fa-microphone cart-icon"></i>
                <div className="d-grid" style={{justifyItems: 'center'}}>
                  <Typography gutterBottom variant="h5" component="div">
                    Microphone
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ranging across all continents except Antarctica
                  </Typography>
                </div>
              </CardActionArea>
            </div>
          </Grid>
          <Grid className="d-flex" item xs={12} md={4} style={{justifyContent: 'center'}} >
            <img src={img} alt="" />
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="p-3">
              <CardActionArea className="d-grid p-3" style={{justifyItems: 'center'}}>
                <i class="fas fa-street-view cart-icon"></i>
                <div className="d-grid" style={{justifyItems: 'center'}}>
                  <Typography gutterBottom variant="h5" component="div">
                    Location
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    widespread group of squamate reptiles, with over 6,000
                    species
                  </Typography>
                </div>
              </CardActionArea>
            </div>
            <div className="p-3">
              <CardActionArea className="d-grid p-3" style={{justifyItems: 'center'}}>
                <i class="fas fa-thermometer-quarter cart-icon"></i>
                <div className="d-grid" style={{justifyItems: 'center'}}>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles
                  </Typography>
                </div>
              </CardActionArea>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DashboardHome;
