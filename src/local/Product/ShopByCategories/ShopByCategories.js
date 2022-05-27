import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import React from "react";
import img2 from '../../../image/leftbanner.png';

const ShopByCategories = () => {
  return (
    <div>
      <div className=" product-left-top-div mt-5 m-2 mb-5 p-3">
        <h5 className="text-left ms-3">Shop By Categories</h5>
        <div>
        <hr />
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Smart Watch</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem>Apple</ListItem>
              <ListItem>Samsung</ListItem>
              <ListItem>Lenovo</ListItem>
              <ListItem>Garmin</ListItem>
              <ListItem>Fitbit</ListItem>
              <ListItem>Huawei</ListItem>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Formal Watch</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem>Fastrack</ListItem>
              <ListItem>Sonata</ListItem>
              <ListItem>Timex</ListItem>
              <ListItem>Casio</ListItem>
              <ListItem>Fossil</ListItem>
              <ListItem>Titan</ListItem>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Quartz Watch</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem>Seiko Prospex</ListItem>
              <ListItem>Tissot T-Race</ListItem>
              <ListItem>Movado Edge</ListItem>
              <ListItem>Victorinox</ListItem>
              <ListItem>G-Shock</ListItem>
              <ListItem>Titan</ListItem>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="d-grid" style={{justifyItems: 'center'}}>
          <img src= {img2} alt="" />
      </div>
    </div>
  );
};

export default ShopByCategories;
