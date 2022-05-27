import ServiceCompo from 'local/DashbordHome/serviceCompo';
import Sponsors from 'local/HomeFastSection/Sponser';
import React from 'react';
import HomeBanner from '../../Banner/HomeBanner';
import HomeFastSection from '../../HomeFastSection/HomeFastSection';
import HomeProduct from '../../HomeProduct/HomeProduct';
import ImageCardMain from '../../ImageCardHome/ImageCartMain';
import CustomHeader from '../../Sheard/Costomheader';
import Footer from '../../Sheard/Footer';
import HomeShowReview from '../../TestMonial/TestiMonials/TestiMonials';
 
const Home = () => {
     return (
        <div>
             <CustomHeader></CustomHeader>
             <HomeBanner></HomeBanner>
             <ImageCardMain></ImageCardMain>
             <HomeFastSection></HomeFastSection>
             <HomeProduct></HomeProduct> 
             <ServiceCompo></ServiceCompo>
             <Sponsors></Sponsors>
             <HomeShowReview></HomeShowReview>
             <Footer></Footer>
        </div>
    );
};

export default Home;





// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import useAuth from '../../../Firebase/Hooks/useAuth';
// import './TestiMonials.css';

// const TestiMonials = () => {
//     const {isLoading} = useAuth();
//     const [Feedbacks, setFeedbacks] = useState([]); 
//     console.log(Feedbacks)

//     useEffect(() => {
//         fetch('https://sleepy-journey-86126.herokuapp.com/review')
//           .then((res) => res.json())
//           .then((data) => setFeedbacks(data));
//       }, [isLoading]);