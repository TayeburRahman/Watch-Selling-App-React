import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ImageCard.css';


function  ImageCard2() {
    return (
      <div className="containerts"> 
      <Carousel >
          <Carousel.Item >
            <img
              className="d-block w-100"
              width="100%"
              src="https://i.ibb.co/16Jf3Ff/resized-image-Promo-15.jpg"
              alt="First slide"
            />
            <Carousel.Caption style={{background:'#00000047'}}>
              <h3 className='sliderText'>Pair of Headphones</h3>
              <Typography variant="caption" display="block" gutterBottom>
                 Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. 
              </Typography>
             </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/qkj6TwL/resized-image-Promo-14.jpg"
              alt="Second slide"
            />
        
            <Carousel.Caption style={{background:'#00000047'}}>
              <h3 className='sliderText'>Ear Headphones </h3> 
              <Typography variant="caption" display="block" gutterBottom>
              When the sound is too loud and played for a long time, the hearing cells in the ear can get damaged.               </Typography>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/QMvH4YP/resized-image-Promo-16.jpg"
              alt="Third slide"
            />
        
            <Carousel.Caption style={{background:'#00000047'}}>
              <h3 className='sliderText'>Headphones and Headsets</h3> 
              <Typography variant="caption" display="block" gutterBottom>
              Explore our extensive range of over-ear headphones including Bluetooth & wireless headphones.</Typography>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>      
        <div className="overlay d-flex" style={{alignItems: 'center',justifyContent: 'center'}} >
         <Link className='linkText'  to="/aLLProduct">
          <Button variant="outlined" size="medium" style={{padding:"20px",color:"rgb(184 204 15)",border:"1px solid red"}} >
            View Modern Headphones
          </Button>
         </Link>
        </div>
      </div>
   
    )
}

export default  ImageCard2
