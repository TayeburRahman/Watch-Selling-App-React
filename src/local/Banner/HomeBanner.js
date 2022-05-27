import React from "react";
import Grid from "@mui/material/Grid";
import { Button,  Typography } from "@mui/material";
import { Box } from "@mui/system";
import "../ComonStyle/ComonStyle.css";
import { Container } from "react-bootstrap";
import './Banner.css'
import { Link } from "react-router-dom";



const HomeBanner = () => {
  return (
    <Grid container spacing={2} className="bannerBg">
      <Container maxWidth="sm">
        <Grid item xs={12} md={6}>
          <Box
            className="text-left mt-5"
            sx={{ fontWeight: 'bold', fontFamily: 'Monospace' }}
            fontStyle={{color:"white"}}
          >
            <Typography className="pt-2 pb-3" variant="h4" component="h6">
              Fabulous
            </Typography>
            <Typography  className="mt-2 mb-3" variant="h2" component="h5">
              SMART WATCH <br /> <span>SERIES 6</span>
            </Typography>
            <Typography  className="mt-2 mb-3" variant="h6" component="p">
              The Feture Of Helth Is On Your Wrist
            </Typography>
             <Link to="/products" style={{textDecoration: 'none'}}>
             <Button variant="contained" className="mt-5">SHOP NOW</Button>
             </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Container>
    </Grid>
  );
};

export default HomeBanner;
