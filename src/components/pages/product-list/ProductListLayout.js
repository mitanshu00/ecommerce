import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import FilterProduct from "./FilterProduct";
import SortProduct from "./SortProduct";
import ProductList from "./ProductList";
import usePaginationc from "../../../hooks/usePaginationc";
import PropTypes from "prop-types";

function ProductListLayout({ filterData }) {
  const [products, setProducts] = useState(filterData);

  // pagination
  const rowsPerPage = 12;
  const userlistcount = products.length;
  const pageCount = Math.ceil(userlistcount / rowsPerPage);

  // custom hook for pagination
  const { page, visited, changePage } = usePaginationc({
    rowsPerPage,
    pageCount,
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5} sm={3} columns={{ xs: 1 }}>
          {products.length === 0 ? (
            <div>No data available for filter</div>
          ) : (
            <></>
          )}
          {products.length > 0 ? (
            <FilterProduct products={filterData} setFilterData={setProducts} />
          ) : (
            <></>
          )}
        </Grid>
        <Grid item xs={7} sm={9} columns={{ xs: 1 }}>
          {products.length === 0 ? <div>No products found.</div> : <></>}
          {products.length > 0 ? (
            <SortProduct setFilterData={setProducts} />
          ) : (
            <></>
          )}
          {products.length > 0 ? (
            <ProductList
              products={products}
              visited={visited}
              rowsPerPage={rowsPerPage}
            />
          ) : (
            <></>
          )}

          <Stack justifyContent="center" direction="row" sx={{ my: 4 }}>
            <Pagination count={pageCount} page={page} onChange={changePage} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

ProductListLayout.propTypes = {
  filterData: PropTypes.array,
};

export default ProductListLayout;
