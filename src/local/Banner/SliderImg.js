import React from 'react'
import { Carousel } from 'react-bootstrap'
import im1 from '../../image/f9ab6a77b9ed029704863d2d25fa5625.jpg'
import im3 from '../../image/images (1).jpeg'
import im2 from '../../image/t55.png'
import './Banner.css'


function SliderImg() {
    return (
        <Carousel fade className='p-5'>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={im1}
               alt="First slide"
             />
           </Carousel.Item>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={im2}
               alt="Second slide"
             />
           </Carousel.Item>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={im3}
               alt="Third slide"
             />
           </Carousel.Item>
          </Carousel>
    )
}

export default SliderImg
