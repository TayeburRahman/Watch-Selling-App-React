import { Rating, Typography } from '@mui/material';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import useAuth from '../../../Firebase/Hooks/useAuth';
import './TestiMonials.css';

const TestiMonials = () => {
    const { user} = useAuth();
    const [allReviews, setReview] = useState([]);   
    const reviews= allReviews.length


    useEffect(() => {
        fetch('https://sleepy-journey-86126.herokuapp.com/review')
          .then((res) => res.json())
          .then((data) => { 
                setReview(data) 
          });
      }, [reviews]);

    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials ">
            <div className="container"
            style={{ marginTop: '-46px'}}
            >
                <div className="text-center"
                style={{margin: '0px 0px -50px 0px'}}
                >
                    <Typography 
                     sx={{ letterSpacing: 8 }}  
                     style={{ paddingTop: "40px"}}
                     className="" className="text-danger" >
                         USER REVIEW
                     </Typography>
                     <Typography className="p-3" sx={{ fontWeight: "bold",textAlign: "center" }}>
                       <h1>  Feedback From Our Members </h1>
                     </Typography>
                   
                     <Typography
                    align="center"
                    variant="body1"
                    component="div"
                    gutterBottom
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    <br />
                    Expedita officia nulla fuga error. Enim illum animi
                    molestiae minus illo! Placeat, laborum.
                </Typography>
                </div>
                 <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                               allReviews.map((reviews, idx) => ( 
                                       <div key={idx} className="item">
                                          <div className="shadow-effect">
                                              <img className="img-circle" src={reviews?.productUrl} />
                                              <h5>{reviews?.userName}</h5> 
                                              <Rating name="read-only" value={reviews?.rating} readOnly />
                                              <p>{reviews?.description}</p>
                                           </div> 
                                       </div>
                                     ))
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;