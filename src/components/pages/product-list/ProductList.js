import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";

export default function ResponsiveGrid({ products }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 5 }}
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      >
        {products.map((product) => (
          <Grid item xs={1} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
