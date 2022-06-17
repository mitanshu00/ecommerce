import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProductImgs from "./ProductImgs";
import ProductDetails from "./ProductDetails";
import { useParams } from "react-router-dom";

let apiUrl = process.env.REACT_APP_API_URL;

function Product() {
  const [product, setProduct] = useState({});
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${apiUrl}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => setError(err));
  }, [id]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7} columns={{ xs: 1 }}>
          {product.poster_urls && <ProductImgs images={product.poster_urls} />}
        </Grid>
        <Grid item xs={12} sm={5} columns={{ xs: 1 }}>
          <ProductDetails product={product} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Product;
