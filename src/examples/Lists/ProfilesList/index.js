/**
=========================================================
* Watch Selling App React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-routers components
// @mui material components
import Card from "@mui/material/Card";
import MakeAdmin from "local/MakeAdmin/MakeAdmin";




function ProfilesList({ title, profiles, shadow }) {
  

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MakeAdmin></MakeAdmin>
    </Card>
  );
}
 
export default ProfilesList;
