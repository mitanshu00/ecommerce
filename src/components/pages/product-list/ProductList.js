import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import { Typography } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ResponsiveGrid({ products }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 5 }}
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      >
        {products.map((product, index) => (
          <Grid item xs={1} key={index}>
            <ProductCard product={product} key={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

{
  /* <Box>
  <img src={product.url} alt="product img" height="280px" width="210px" />
  <Typography>{product.name}</Typography>
  <Typography>{product.description}</Typography>
  <del>Rs. {product.price}</del>
  <Typography>{`Rs. ${product.price} (${product.discount}%)`}</Typography>
</Box>; */
}
