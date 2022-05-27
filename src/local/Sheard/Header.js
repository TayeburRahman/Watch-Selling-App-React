import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Button } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Firebase/Hooks/useAuth";
import logo from '../../image/logo.png';
import LoginModal from "../UserLogin/LoginModal";
import './header.css';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const { user, logOut } = useAuth();
  const [Products, setProduct] = useState([]); 
  console.log(Products)
 
  
    useEffect(() => {
      if(user){
        fetch(`https://sleepy-journey-86126.herokuapp.com/userOder/${user?.email}`,{
          headers:{
            'authorization':`Bearer ${localStorage.getItem('idToken')}`
          }
        })
          .then((res) => { 
              return res.json(); 
          })
          .then((data) => setProduct(data));
      }else{ 
      }
    }, [user]) 
  

  return (
    <div className="headers">
      <Navbar collapseOnSelect expand="lg" className="bg-colors mt-1" variant="dark">
        <Container className='ps-3 pe-3' style={{background:"white"}}>
          <Navbar.Brand href="#home" className="text-color-tag">
          <img className='ms-3 me-5' src={logo} width={85} alt="BigCo Inc. logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{background: "dimgray"}} />
          <Navbar.Collapse id="responsive-navbar-nav " className="mt-2">
            <Nav className="me-auto text-color-mnu"
            style={{alignItems: "center"}}
            >
              <Nav.Link as={HashLink} to="/home" className="text-color-mnu">
                <h6 className="text-color-mnu">HOME</h6>
              </Nav.Link>
              <Nav.Link as={HashLink} to="/aLLProduct" className="text-color-mnu">
              <h6 className="text-color-mnu">CATEGORY</h6> 
              </Nav.Link>
              <NavDropdown title="DASHBOARD" className="text-color-mnu" id="collasible-nav-dropdown"
              style={{marginTop: "-8px"}}
              >
                <NavDropdown.Item as={HashLink} className="Dropdown" to="/dashboard" >
                <h6>Dashboard</h6> 
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} className="Dropdown" to="/order/user">
                <h6>Your Orders</h6>
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item as={HashLink} className="Dropdown" to="/authentication/sign-up">
                <h6>Register Now</h6>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={HashLink}  to="/aboutUs"  className="text-color-mnu">
              <h6 className="text-color-mnu">ABOUT US </h6> 
              </Nav.Link>
            
            </Nav>
            <Nav className='  pt-2'>
               <div className="d-flex right-sec-heder pb-3">
               <div className="cart d-grid" style={{alignItems: 'center', height: '40px', width: '40px'}}>
               {
                 user?.email?(
                  <Link to="/order/user"> 
                  <ShoppingCartIcon style={{fontSize: '180%', color:'darkgoldenrod'}}/>
                    <div className="cartIcons">{Products?.length}</div>
                  </Link>
                 ):(
                  <Link to="/order/user"> 
                  <ShoppingCartIcon style={{fontSize: '180%', color:'darkgoldenrod'}}/>
                    <div className="cartIcons">0</div>
                  </Link>
                 )
               }
              </div>
              {user?.email ? (
                <Fragment>
                   <Button onClick={logOut} variant="text">
                   <LogoutIcon  style={{fontSize: "180%",color: "darkgoldenrod", fontWeight:"700"}}/>
                </Button>
                  <Link to="/user.profile">
                  <Avatar src={user.photoURL} />
                </Link>
                </Fragment>
              ) : (
                <Button onClick={handleOpen} variant="text"
                style={{color:'darkgoldenrod'}}
                >
                  LOGIN
                </Button> 
              )}
               </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal open={open} handleClose={handleClose}></LoginModal>
    </div>
  );
};

export default Header;
