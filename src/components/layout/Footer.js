import { Box } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "lightgray",
        minHeight: "400px",
        minWidth: "100%",
      }}
    >
      <Box sx={{ maxWidth: "1500px", margin: "30px auto" }}>
        <p>copyright</p>
      </Box>
    </footer>
  );
}

export default Footer;
