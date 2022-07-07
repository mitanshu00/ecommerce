import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function NotFound () {
  return (
    <Box sx={{ width: "700px", m: "100px auto" }}>
      <h2>Something went wrong Error 404. go to home page</h2>
      <Button variant="contained">
        <Link to="/">Homepage</Link>
      </Button>
    </Box>
  );
}

export default NotFound;
