import { Typography } from "@mui/material";
import React from "react";
import img from "../../image/aboutus.png";

const HomeFastSection = () => {
  return (
    <div className="container">
      <div className="row d-flex mt-5 pb-5 mb-4 pt-5">
        <div className="col-md-6 col-sm-6">
          <div>
            <img src={img} width="100%" alt="" />
          </div>
        </div>
        <div className="col-md-6 col-sm-6 p-5 text-left space">
          <Typography sx={{ letterSpacing: '6px'}} className="text-danger mb-2" >THE PRODUCTS</Typography>
          <h1 className="mb-4 color-text" sx={{ fontFamily: 'Monospace' }}>All About Fabulous</h1>
          <p>
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim, rhoncus, imperdiet a,
            venenatis vitae, justo. Etiam ultricies nisi vel augue
            incididunt.Phasellus viverra nulla ut metus varius laoreet. Quisque
            rutrum. Aenean imperdiet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFastSection;
