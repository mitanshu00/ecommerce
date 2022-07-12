import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function ResponsiveGrid({ products, visited, rowsPerPage }) {
  const whishlistIds = useSelector((state) => state.whishlist.itemIds);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 5 }}
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      >
        {products.slice(visited, visited + rowsPerPage).map((product) => (
          <Grid item xs={1} key={product.id}>
            <ProductCard
              product={product}
              whishlisted={whishlistIds.includes(product.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

ResponsiveGrid.propTypes = {
  products: PropTypes.array,
  visited: PropTypes.number,
  rowsPerPage: PropTypes.number,
};
