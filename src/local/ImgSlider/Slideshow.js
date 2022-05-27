import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './ImageSlider.css'
import img1 from '../../image/slider-img-home2.jpeg'
import img2 from '../../image/slider-img-home1.jpeg'
import img3 from '../../image/slider-img-home3.jpeg'
import img4 from '../../image/slider-img-home4.jpeg'
import img5 from '../../image/slider-img-home5.jpeg'
import img6 from '../../image/slider-img-home6.jpeg'





const images = [
  {
    url: img1,
     },
    {
    url: img2,
     },
    {
    url: img3,
     },
     {
      url: img4,
       },
   // '../../image/watch1.png', 
];

const Slideshow = () => {
    return (
      <div className="slide-container contaner">
        <Zoom scale={0.4}>
       <img style={{width: "100%"}} src={img1} />
       <img style={{width: "100%"}} src={img2} />
       <img style={{width: "100%"}} src={img3} />
       <img style={{width: "100%"}} src={img4} />
       <img style={{width: "100%"}} src={img5} />
       <img style={{width: "100%"}} src={img6} />
        </Zoom>
      </div>
    )
}
export default Slideshow;