import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import RButton from "../../ReusableComponents/Button";

function NotFound() {
  return (
    <Box sx={{ width: "700px", m: "100px auto" }}>
      <h2>Something went wrong Error 404. go to home page</h2>
      <RButton variant="contained">
        <Link to="/">Homepage</Link>
      </RButton>
    </Box>
  );
}

export default NotFound;
