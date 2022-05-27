import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TwitterIcon from "@mui/icons-material/Twitter";
import { Container, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useAuth from "Firebase/Hooks/useAuth";
import Footer from 'local/Sheard/Footer';
import ShortNav from 'local/Sheard/Navbar.short';
import { default as React, Fragment, useEffect, useState } from "react";
import { Carousel } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import ProfileCard from "./Profile.card";


function UserProfile() {
    const {user}= useAuth() 

    const [oderProduct, setOderProduct] =  useState([]);
    const navigate = useNavigate();

     useEffect(() => {
        fetch(`https://sleepy-journey-86126.herokuapp.com/userOder/${user?.email}`,{
          headers:{
            'authorization':`Bearer ${localStorage.getItem('idToken')}`
          }
        })
          .then((res) => {
            // console.log(res)
            if(res.status == 200){
              return res.json();
            }
            else if(res.status === 401){
              navigate('/authentication/sign-in')
            }
          })
          .then((data) => setOderProduct(data));
      }, [user]);



    return (
        <Fragment>
        <div className="d-grid">
         <Box className="orderHeader d-flex">
             <Box className=" col-md-9 col-sm-12 orderNav">
                 <ShortNav title="Profile"></ShortNav>
             </Box> 
         </Box>
         <Container className="col-12 mb-5"> 
            <Box className="d-flex infoSection">
                 <Box className="col-md-6 col-sm-6 col-lg-6">
                 <Box> 
                    <Box className='imageDivProfile p-2' 
                    sx={{ 
                        mt: {lg:"-50px",},  
                        width:"30%", 
                        background:"white"
                         }}
                    >
                       <img
                         src={user.photoURL}
                          alt="Profile Image"
                          loading="lazy"
                          width="100%"
                       />
                       <Box className="d-flex mt-3 mb-3" style={{justifyContent:"space-evenly"}}>
                        <Link to="" style={{color:"#4267B2"}}>
                        <FacebookIcon />
                        </Link>
                        <Link  style={{color:"#00acee"}}>
                        <TwitterIcon /> 
                        </Link>
                        <Link  style={{color:"#3f729b"}}>
                        <InstagramIcon /> 
                        </Link>
                     </Box>
                    </Box>
                 </Box>
                 <Box>
                     <Typography className="css-17pt5qvt" gutterBottom>
                       <span style={{fontWeight:700}}>Full Name: </span> {user.displayName}
                     </Typography> 
                     <Typography className="css-17pt5qvt" gutterBottom>
                       <span style={{fontWeight:700}}>Email: </span> {user.email}
                     </Typography>
                     <Typography className="css-17pt5qvt" gutterBottom>
                       <span style={{fontWeight:700}}>User ID: </span> {user.uid}
                     </Typography>
                     <Typography className="css-17pt5qvt" gutterBottom>
                       <span style={{fontWeight:700}}>Create Account: </span> {user?.metadata?.creationTime}
                     </Typography>
                      
                 </Box>
                 </Box>
                 <Box className="sliderProfile col-md-6 col-sm-6 col-lg-6 p-5">
                  <Carousel>
                     <Carousel.Item className="d-grid" style={{justifyItems: 'center'}}>
                       <img
                         className="d-block"
                         width="70%"
                         src="https://i.ibb.co/FqfjBKv/id116-Smart-Bracelet-Black.png"
                         alt="First slide"
                       /> 
                     </Carousel.Item>
                     <Carousel.Item className="d-grid" style={{justifyItems: 'center'}}>
                       <img
                         className="d-block"
                         src="https://i.ibb.co/HNhB2yH/Hbb1f01f8abdf4ba9826e32ac33a18035a.png"
                         alt="Second slide"
                         width="70%"
                       /> 
                     </Carousel.Item>
                     <Carousel.Item className="d-grid" style={{justifyItems: 'center'}}>
                       <img
                         className="d-block"
                         src="https://i.ibb.co/LhT0Z1r/HLB1-Zxe-FQQvo-K1-Rj-SZPfq6x-PKFXan.png"
                         alt="Second slide"
                         width="70%"
                       /> 
                     </Carousel.Item> 
                      
                  </Carousel>  
                 </Box>
            </Box>
            <hr></hr>
            {
              oderProduct.length ? 
              <Box>
              <Box>
                 <Typography variant="h5" className="css-17pt5qvt" gutterBottom  style={{fontWeight:700}}>
                  Total Orders Items: {oderProduct.length} 
                 </Typography>  
              </Box>
              <Box className="row">
                  {
                      oderProduct.map((product, dex)=>(
                          <Box key={dex} className="col-md-4 col-sm-6 col-lg-3">
                          <ProfileCard product={product}></ProfileCard>
                          </Box>
                      ))
                  }
                   
              </Box> 
              </Box>
              :
              <Container className='boxOrders d-grid'> 
                <Box className="d-flex">
                <ShoppingCartIcon/>
                  <Typography variant="h6" component="div">
                   No Orders 
                 </Typography> 
                </Box>
                <Typography variant="subtitle2" gutterBottom>
                    {user.displayName}
                 </Typography>
               <Typography variant="caption" display="block" gutterBottom>
                  You haven't submitted any cards for grading yet.
                  Click the button below to get started.
               </Typography>
               </Container> 
            } 
           
         </Container>
        
     </div>
     <Footer></Footer>
      </Fragment>
    )
}

export default UserProfile
