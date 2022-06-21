import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FilterProduct from "./FilterProduct";
import SortProduct from "./SortProduct";
import ProductList from "./ProductList";

function ProductListLayout({ filterData }) {
  const [products, setProducts] = useState(filterData);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5} sm={3} columns={{ xs: 1 }}>
          {products.length === 0 && <div>No data available for filter</div>}
          {products.length > 0 && (
            <FilterProduct products={filterData} setFilterData={setProducts} />
          )}
        </Grid>
        <Grid item xs={7} sm={9} columns={{ xs: 1 }}>
          {products.length === 0 && <div>No products found.</div>}
          {products.length > 0 && <SortProduct setFilterData={setProducts} />}
          {products.length > 0 && <ProductList products={products} />}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductListLayout;
