import React from "react";
import { Button, Typography, Box, Stack, Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function ProductDetails({ product }) {
  return (
    <Box sx={{ px: 2 }}>
      <Typography variant="h3">{product.name}</Typography>
      <Typography variant="h6" sx={{ my: 2 }}>
        {product.description}
      </Typography>

      <Button variant="outlined">4.5 ⭐ | 12 Reviews</Button>

      <Stack direction="row" sx={{ mt: 4 }}>
        <Typography variant="h5">
          <span>₹{product.price}</span>
          &nbsp;&nbsp;&nbsp;
        </Typography>
        <Typography>
          <span>
            <strike>₹5999</strike>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#388E3C" }}>49% off</span>
        </Typography>
      </Stack>
      <Typography variant="subtitle2" sx={{ color: "darkgreen" }}>
        Inclusive all taxes
      </Typography>
      <Stack spacing={2} direction="row" sx={{ mt: 4 }}>
        <Button variant="contained" color="success" sx={{ px: 4, py: 2 }}>
          <AddShoppingCartIcon sx={{ pr: 1 }} />
          ADD TO CARD
        </Button>
        <Button variant="outlined" color="secondary" sx={{ px: 4, py: 2 }}>
          <FavoriteBorderIcon sx={{ pr: 1 }} />
          WHISHLIST
        </Button>
      </Stack>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5">Product Details</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisl,
        euismod nisl nisl euismod nisl.
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisl,
        euismod nisl nisl euismod nisl.
      </Typography>

      <Typography variant="h5" sx={{ my: 4 }}>
        Specifications
      </Typography>

      <Divider sx={{ my: 4 }} />
      <Typography variant="h5">Ratings & Reviews</Typography>
    </Box>
  );
}

export default ProductDetails;
