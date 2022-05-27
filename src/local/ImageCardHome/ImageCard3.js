import { Button, Typography } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ImageCard.css';


function ImageCard3() {
    return (
     
      <div className="containerts">
 
          <Carousel >
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  width="100%"
                  src="https://i.ibb.co/CJCShrf/Temp-1000x600-1.png"
                  alt="First slide"
                />
                <Carousel.Caption style={{background:'#00000047'}}>
                  <h3 className='sliderText'>First slide label</h3>
                  <Typography variant="caption" display="block" gutterBottom>
                     Mobile Phone Cover At Best Price In Bangladesh - Daraz.com.bd. Daraz.com.      
                  </Typography>
                 </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/YN9HfmC/Temp-1000x600-2.png"
                  alt="Second slide"
                />
            
                <Carousel.Caption style={{background:'#00000047'}}>
                  <h3 className='sliderText'>Second slide label</h3> 
                  <Typography variant="caption" display="block" gutterBottom>
                     Make your Phone Cover stand out in the crowd with yourPrint!
                  </Typography>
                   
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/Jz7K2v5/Temp-1000x600.png"
                  alt="Third slide"
                />
            
                <Carousel.Caption style={{background:'#00000047'}}>
                  <h3 className='sliderText'>Third slide label</h3>  
                  <Typography variant="caption" display="block" gutterBottom>
                   Explore the popular designs of phone cover at Alibaba with low prices and massive discounts.                 
                  </Typography>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>      
            <div className="overlay d-flex" style={{alignItems: 'center',justifyContent: 'center'}}>
            <Link className='linkText'  to="/aLLProduct">
            <Button variant="outlined" size="medium" style={{padding:"20px",color:"rgb(184 204 15)",border:"1px solid red"}} >
              View SMART WATCH
            </Button>
            </Link>
            </div> 
       </div>
    )
}

export default ImageCard3
