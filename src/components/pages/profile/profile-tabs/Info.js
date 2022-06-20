import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Info() {
  const user = useSelector((state) => state.auth.user);
  return (
    <Paper sx={{ width: "100%", minHeight: "400px", pt: 2, pl: 4, my: 2 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Name
          </Typography>
          <Typography variant="h6" sx={{ my: 2 }}>
            Email
          </Typography>
          <Typography variant="h6" sx={{ my: 2 }}>
            Gender
          </Typography>
          <Typography variant="h6" sx={{ my: 2 }}>
            Mobile no
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ my: 2 }}>
            {user.name}
          </Typography>
          <Typography variant="h6" sx={{ my: 2 }}>
            {user.email}
          </Typography>
          <Typography variant="h6" sx={{ my: 2 }}>
            Male
          </Typography>
          <Typography variant="h6" sx={{ my: 2 }}>
            {user.mobile_number}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
