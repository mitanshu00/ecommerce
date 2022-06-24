import { Box, Grid } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "lightgray",
        minHeight: "300px",
        minWidth: "100%",
      }}
    >
      <Box sx={{ maxWidth: "1500px", margin: "0 auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} columns={{ xs: 1 }}>
            <Box sx={{ px: 2 }}>
              <h3>About Us</h3>
              <p>Contact Us</p>
              <p>About Us</p>
              <p>Wholesale</p>
              <p>Stories</p>
              <p>Information</p>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} columns={{ xs: 1 }}>
            <Box sx={{ px: 2 }}>
              <h3>Help</h3>
              <p>Payments</p>
              <p>Shipping</p>
              <p>Cancellation & Returns </p>
              <p>FAQ</p>
              <p>Report</p>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} columns={{ xs: 1 }}>
            <Box sx={{ px: 2 }}>
              <h3>Policy</h3>
              <p>Return Policy</p>
              <p>Terms Of Use</p>
              <p>Security</p>
              <p>Privacy</p>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} columns={{ xs: 1 }}>
            <Box sx={{ px: 2 }}>
              <h3>Contact Us</h3>
              <p>Email:xyz@gamil.com</p>
              <p>Phone:+91-123-456-7890</p>
              <p>Address:ABC Road,Bangalore</p>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}

export default Footer;
