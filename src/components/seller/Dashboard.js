import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Dashboard() {
  return (
    <>
      <Stack spacing={3} direction="row" justifyContent="space-evenly">
        <Box sx={{ p: 3, boxShadow: 2 }}>
          <Typography variant="h6" gutterBottom>
            Total Sales : $29,999
          </Typography>
        </Box>
        <Box sx={{ p: 3, boxShadow: 2 }}>
          <Typography variant="h6" gutterBottom>
            Total Orders: 391
          </Typography>
        </Box>
        <Box sx={{ p: 3, boxShadow: 2 }}>
          <Typography variant="h6" gutterBottom>
            Total Revenue: $29,999
          </Typography>
        </Box>
      </Stack>
    </>
  );
}
