import { useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FilterProduct from "./FilterProduct";
import SortProduct from "./SortProduct";
import ProductList from "./ProductList";
import { products } from "../../../data/product";

function Products() {
  const [filterData, setFilterData] = useState(products);

  let { category } = useParams();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5} sm={3} columns={{ xs: 1 }}>
          <FilterProduct products={filterData} />
        </Grid>
        <Grid item xs={7} sm={9} columns={{ xs: 1 }}>
          <SortProduct />
          <ProductList products={filterData} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Products;
