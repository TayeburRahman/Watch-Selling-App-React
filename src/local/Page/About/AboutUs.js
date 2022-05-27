import { Box, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import img1 from "../../../image/1.png";
import img2 from "../../../image/2.png";
import img3 from "../../../image/3.png";
import img from "../../../image/banner1.png";
import Costomheader from "../../Sheard/Costomheader";
import Footer from "../../Sheard/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Costomheader></Costomheader>
      <div className="mt-5">
        <h3 className="mb-5 d-grid" style={{justifyContent: 'center'}}>About Us</h3>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="d-grid" style={{justifyItems: 'center'}}>
              <img src={img} width="80%" alt="" />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="text-left p-5">
            <Typography
              variant="h4"
              sx={{ fontWeight: "medium" }}
              className="pb-4"
            >
              We Have Everything You Need ?
            </Typography>
            <Typography
              variant="p"
              sx={{ fontWeight: "medium" }}
              className="pb-5 text-secondary"
            >
              Faded short sleeves t-shirt with high neckline. Soft and stretchy
              material for a comfortable fit. Accessorize with a straw hat and
              you're ready for summer!
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: "medium" }}
              className="pb-3 pt-5"
            >
              Sample Unordered List
            </Typography>
            <ul class=" ">
              <li className="text-secondary">
                Dummy text used in laying out print, graphic or web designs
              </li>
              <li className="text-secondary">The passage is attributed to.</li>
              <li className="text-secondary">
                Proin molestie egestas orci ac suscipit risus posuere loremou.
              </li>
              <li className="text-secondary">
                Dummy text used in laying out print, graphic or web designs
              </li>
            </ul>
          </Grid>
        </Grid>
        <div className="p-5 d-grid">
          <Grid container spacing={2} className="d-grid productUs">
            <div className="d-grid pt-5">
              <Typography
                variant="p"
                className="pb-1"
                sx={{ letterSpacing: 6 }}
              >
                <p className="text-danger"> The Products</p>
              </Typography>
              <Typography
                variant="h3"
                className="mb-4"
                sx={{ fontWeight: "bold" }}
              >
                Our Services
              </Typography>
            </div>
            <div className="d-flex">
              <Grid item xs={12} md={4} className="pt-5 pb-5">
                <Box className="d-grid" style={{justifyItems: 'center'}}>
                  <img className="imgCartAboutUs" src={img1} alt="" />
                  <CardContent className="d-grid" style={{justifyItems: 'center'}}>
                    <Typography gutterBottom variant="h5" component="div">
                      FREE RESOURCES
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Bring to the table win-win survival strategies to ensure
                      proactive domination.
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} className="pt-5">
                <Box className="d-grid" style={{justifyItems: 'center'}}>
                  <img className="imgCartAboutUs" src={img2} alt="" />
                  <CardContent className="d-grid" style={{justifyItems: 'center'}}>
                    <Typography gutterBottom variant="h5" component="div">
                      MULTI PURPOSE
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Bring to the table win-win survival strategies to ensure
                      proactive domination.
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} className="pt-5">
                <Box className="d-grid" style={{justifyItems: 'center'}}>
                  <img className="imgCartAboutUs" src={img3} alt="" />
                  <CardContent className="d-grid" style={{justifyItems: 'center'}}>
                    <Typography gutterBottom variant="h5" component="div">
                      FULLY RESPONSIVE
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Bring to the table win-win survival strategies to ensure
                      proactive domination.
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
            </div>
          </Grid>
        </div>
        <div className="d-grid" style={{justifyItems: 'center'}}>
          <Grid container spacing={2}  style={{justifyItems: 'center'}}>
            <Grid item xs={12} md={6} className="text-left p-5 mt-4">
              <Typography
                variant="h4"
                sx={{ fontWeight: "medium" }}
                className="pb-4"
              >
                We Have Everything You Need ?
              </Typography>
              <Typography
                variant="p"
                sx={{ fontWeight: "medium" }}
                className="pb-5 text-secondary"
              >
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy material for a comfortable fit. Accessorize with a
                straw hat and you're ready for summer!
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "medium" }}
                className="pb-3 pt-5"
              >
                Sample Unordered List
              </Typography>
              <ul class=" ">
                <li className="text-secondary">
                  Dummy text used in laying out print, graphic or web designs
                </li>
                <li className="text-secondary">
                  Dummy text used in laying out print, graphic or web designs
                </li>
                <li className="text-secondary">
                  The passage is attributed to.
                </li>
                <li className="text-secondary">
                  Proin molestie egestas orci ac suscipit risus posuere loremou.
                </li>
                <li className="text-secondary">
                  Dummy text used in laying out print, graphic or web designs
                </li>
                <li className="text-secondary">
                  Dummy text used in laying out print, graphic or web designs
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="d-grid" style={{justifyContent: 'center'}}>
                <img
                  src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/aboutusbanner2.png"
                  width="80%"
                  alt=""
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
