 
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
// Watch Selling App React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";
// Watch Selling App React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import AllOderProduct from "./data/UpdateTable";
 



function Tables() { 

  return (
    <DashboardLayout>
      <DashboardNavbar name="Order Manager (OMS)" />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Authors Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                  <AllOderProduct key="11245"></AllOderProduct>
              </MDBox>
            </Card>
          </Grid>
          
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
