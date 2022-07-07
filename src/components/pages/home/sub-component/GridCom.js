import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function GridCom ({ columns, children }) {
  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={{ xs: 0, md: 1 }} columns={columns}>
        {children}
      </Grid>
    </Box>
  );
}
