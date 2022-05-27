import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import useAuth from 'Firebase/Hooks/useAuth';
import * as React from 'react';
import { Link } from 'react-router-dom';


const pages=[
  {
    name: "Home",
    route:"/home",
    key:"Home"
  },
  {
    name: "Orders",
    route:"/order/user",
    key:"Orders"
  },
    {
      name: "Sing In",
      route:"/authentication/sign-in",
      key:"login"
    },
    {
      name: "Sing Up",
      route:"/authentication/sign-up",
      key:"register"
    },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function ShortNav({title}) {
  // console.log('title',title)
  const {user}= useAuth()
  const [anchorElNav, setAnchorElNav] = React.useState(null); 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  
    return (
 
        <AppBar position="static" className="static-t" style={{background:"Black"}}>
        <Container maxWidth="xl"  >
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex',color:'#ff2f00e8' } }}
            >
              {title}
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.key} >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'},justifyContent: 'center', color:"white" }}>
              {pages.map((page) => (
                <Button
                className='colorRed' 
                  key={page.key}
                  sx={{ my: 2, color: 'white', display: 'block',color:'white' }}
                >
                  <Link className='navLinkShort' to={page.route}> {page.name} </Link> 
                </Button>
              ))}
            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="User Profile">
                <Link to="/user.profile">
                <Avatar src={user.photoURL} />
                </Link>
              </Tooltip>
             
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

    )
}

export default ShortNav
