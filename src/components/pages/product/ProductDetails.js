import { useState, useEffect } from "react";
import { Button, Typography, Box, Stack, Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Reviews from "./Reviews";
import { cartActions } from "../../../store/slice/cart-slice";
import { useDispatch } from "react-redux";

let apiUrl = process.env.REACT_APP_API_URL;

function ProductDetails({ product }) {
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    fetch(`${apiUrl}/reviews/?product_id=34`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        price: product.price,
        totalPrice: product.price,
        name: product.name,
        img_url: product.poster_urls[0],
        description: product.description,
      })
    );
  };

  // const addToWishlistHandler = () => {};

  return (
    <Box
      sx={{ px: 2 }}
      // className="product-details"
    >
      <Typography variant="h3">{product.name}</Typography>
      <Typography variant="h6" sx={{ my: 2 }}>
        {product.description}
      </Typography>
      <Button variant="outlined">
        {avgRating} ⭐ | {reviews.length} Reviews
      </Button>
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
        <Button
          variant="contained"
          color="success"
          sx={{ px: 4, py: 2 }}
          onClick={addToCartHandler}
        >
          <AddShoppingCartIcon sx={{ pr: 1 }} />
          ADD TO CARD
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ px: 4, py: 2 }}
          // onClick={addToWishlistHandler}
        >
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
      {reviews.length === 0 && <p>no reviews available</p>}
      {reviews.length > 0 && (
        <Reviews
          reviews={reviews}
          avgRating={avgRating}
          setAvgRating={setAvgRating}
        />
      )}
    </Box>
  );
}

export default ProductDetails;
