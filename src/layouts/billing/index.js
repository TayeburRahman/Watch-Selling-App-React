// @mui material components
import { Icon } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
// Watch Selling App React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { useMaterialUIController } from "context";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import Footer from "examples/Footer";
// Watch Selling App React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Invoices from "layouts/billing/components/Invoices";
// Billing page components
import ProductMethod from "layouts/billing/components/ProductMethod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import EditModal from "./EditModal";

 
function Billing() {
  const [product, setAllProduct] = useState([{}]);  
  const [isDelete, setIsDelete] = useState(false);
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [open, setOpen] = useState(false);
  const [isPdData, setPdData] = useState(false);
  const {reset, register, handleSubmit } = useForm(); 


  
    const handleOpen = (data) => { 
        setPdData(data)
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
        reset()
    };

    // ------------------------
   useEffect(() => {
    fetch("https://sleepy-journey-86126.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
     }, [open,isDelete,product]);
    // ------------------------
  const handleDeleteOrders = (id) => {
      // console.log(id)
    const url = `https://sleepy-journey-86126.herokuapp.com/deleteProduct/${id}`;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            // console.log("dltId", result);
            if (result.deletedCount) {
              setIsDelete(true);
            } else {
              setIsDelete(false);
            }
          });
      }
    });
  };
  return (
    <DashboardLayout>
      <DashboardNavbar name="Product Manager (PM)" absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                  image="https://i.ibb.co/tQ6kj1n/Temp-100x100-removebg-preview.png" 
                    title="Digital Watch"
                    description="Nothing beats the looks and practical nature of a digital watch." 
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                  image="https://i.ibb.co/DYJ5Nfm/Temp-100x100-1-removebg-preview.png" 
                    title="Analog Watch"
                    description="Watches Men Analog · Titan 1802NL02 Neo Analog Watch for Men ·" 
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                  image="https://i.ibb.co/5M7GCFn/Temp-170x170.png" 
                    title="Automatic Watch"
                    description="An automatic watch, on the other hand, does it for you via a self-winding power reserve." 
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                  image="https://i.ibb.co/T2cyRQV/Temp-100x100-4.png  " 
                    title="Headphone"
                    description="Earbud headphones are the most compact way to take in rich, premium sound." 
                  />
                </Grid>
                <Grid item xs={12}>
                  <ProductMethod />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Invoices />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}> 
            { product?.map((pd,idx)=>(
               <Grid item xs={12} md={6} key={pd._id}>
                   <MDBox className="p-4" width="100%" display="flex" flexDirection="column" bgColor={darkMode ? "transparent" : "grey-100"}>
                    <Box> 
                      <img
                        src={pd.img}  
                        loading="lazy"
                        width="20%"
                      /> 
         
                    </Box>
                    <Box>
                    <MDBox
                     display="flex"
                     justifyContent="space-between"
                     alignItems={{ xs: "flex-start", sm: "center" }}
                     flexDirection={{ xs: "column", sm: "row" }}
                     mb={2}
                   >
                     <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
                       {pd.name}
                     </MDTypography>
           
                     <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
                       <MDBox mr={1}>
                         <MDButton variant="text" color="error" onClick={() => handleDeleteOrders(pd._id)} >
                           <Icon>delete</Icon>&nbsp;delete
                         </MDButton>
                       </MDBox>
                       <MDButton onClick={()=> handleOpen(pd)} variant="text" color={darkMode ? "white" : "dark"}>
                         <Icon>edit</Icon>&nbsp;edit
                       </MDButton>
                     </MDBox>
                   </MDBox>
                   <MDBox mb={1} lineHeight={0}>
                     <MDTypography variant="caption" color="text">
                       Rating:&nbsp;&nbsp;&nbsp;
                       <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                        {pd.rating}
                       </MDTypography>
                     </MDTypography>
                   </MDBox>
                   <MDBox mb={1} lineHeight={0}>
                     <MDTypography variant="caption" color="text">
                       Old Price:&nbsp;&nbsp;&nbsp;
                       <MDTypography variant="caption" fontWeight="medium">
                         {pd.oldPrice} $
                       </MDTypography>
                     </MDTypography> <br></br> <br></br>
                     <MDTypography variant="caption" color="text">
                      Update Price:&nbsp;&nbsp;&nbsp;
                     <MDTypography variant="caption" fontWeight="medium">
                      {pd.updatePrice} $
                     </MDTypography>
                   </MDTypography>
                   </MDBox>
                   <MDTypography variant="caption" color="text">
                      Product id:&nbsp;&nbsp;&nbsp;
                     <MDTypography variant="caption" fontWeight="medium">
                      {pd._id}
                     </MDTypography>
                   </MDTypography>
                  </Box>
                </MDBox>
               </Grid> 
        ))
      }
             
          </Grid>
        </MDBox>
      </MDBox>
         <EditModal
            reset={reset}
             open={open}
             handleClose={handleClose}
             product={isPdData}
             register={register}
             handleSubmit={handleSubmit}
         ></EditModal>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
