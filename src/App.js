import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import brandDark from "assets/images/logo-ct-dark.png";
// Images
import brandWhite from "assets/images/logo-ct.png";
import theme from "assets/theme";
// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// Material Dashboard 2 React contexts
import { setMiniSidenav, setOpenConfigurator, useMaterialUIController } from "context";
import Configurator from "examples/Configurator";
// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import AuthProvider from "Firebase/Context/AuthProvider";
import PrivateRoute from "PrivateRoute/PrivateRoute";
import { useEffect, useState } from "react";
// react-router components
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// Material Dashboard 2 React routes
import routes from "routes";
import AboutUs from './Component/Page/About/AboutUs';
import AllProduct from './Component/Page/AllProduct/AllProduct';
// import Dashboard from "./Components/Page/Dashbord/Dashboard";
import Home from './Component/Page/Home/Home';
import ManageAllOder from './Component/Page/ManageAllOder/ManageAllOder';
import ProductCalection from './Component/Page/ProductCalection';
import Spping from './Component/Page/Spping/Spping';
import Login from './Component/UserLogin/Login';
import Register from './Component/UserLogin/Register';
 









export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false)

  const { pathname } = useLocation()

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

   const home = !useLocation().pathname.includes('/');
   const homeMain = !useLocation().pathname.includes('/home');
   const login = !useLocation().pathname.includes('/login');
   const NavHideDashboard = !useLocation().pathname.includes('/register');
   const service = !useLocation().pathname.includes('/products');
   const aLLProduct = !useLocation().pathname.includes('/aLLProduct');
   const aboutUs = !useLocation().pathname.includes('/aboutUs'); 
   const productId = !useLocation().pathname.includes('/product/:productId'); 
   const manageAllOrders = !useLocation().pathname.includes('/manageAllOrders'); 

   const dashboard = !useLocation().pathname.includes('/dashboard');
   const profile = !useLocation().pathname.includes('/profile');
   const notifications = !useLocation().pathname.includes('/notifications');
   const billing = !useLocation().pathname.includes('/billing');
   const tables = !useLocation().pathname.includes('/tables'); 


   const cobainLocal = home && login && NavHideDashboard &&  homeMain && service &&  aLLProduct && aboutUs && productId && manageAllOrders ;
   
   const cobainDashboard = dashboard && profile && notifications &&  billing && tables ;

  return  (
    <> 
     <AuthProvider>  
     {!cobainDashboard && (
      <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />
        {layout === "dashboard" && (
        <>
           <PrivateRoute>
           <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Material Dashboard 2"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
          {layout === "vr" && <Configurator />}
          <Routes>
          {getRoutes(routes)} 
                <Route path="/dashboard" element={<Navigate />} />
          </Routes>
           </PrivateRoute>
        </>
      )}
       </ThemeProvider>
      
    )}
      {!cobainLocal && (
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/products" element={<AllProduct/>} />
          <Route path="/aLLProduct" element={<ProductCalection/>} />
          <Route path="/aboutUs" element={<AboutUs/>} />  
          <Route path="/product/:productId" element={ <PrivateRoute><Spping/> </PrivateRoute>} /> 
          <Route path="/manageAllOrders" element={<PrivateRoute><ManageAllOder/> </PrivateRoute>} />
         </Routes>
      )}
      </AuthProvider>
 
    </>
  );
}
