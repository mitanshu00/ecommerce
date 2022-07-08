import { useState, useEffect } from "react";
import { Button, Typography, Box, Stack, Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Reviews from "./Reviews";
import { cartActions } from "../../../store/slice/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { WhishlistActions } from "../../../store/slice/whishlist-slice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { sendCartData } from "../../../store/action/cart-action";
import PropTypes from "prop-types";

const apiUrl = process.env.REACT_APP_API_URL;

function ProductDetails({ product }) {
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    fetch(`${apiUrl}/reviews/?product_id=${product.id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [product.id]);

  const whishlistIds = useSelector((state) => state.whishlist.itemIds);
  const token = useSelector((state) => state.auth.user.token);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        price: product.price,
        totalPrice: product.price,
        name: product.name,
        img_url: product.poster_urls[0],
        description: product.description
      })
    );
    dispatch(sendCartData(token, product.id));
  };

  const addToWishlistHandler = () => {
    dispatch(
      WhishlistActions.addItemToWishlist({
        id: product.id,
        price: product.price,
        name: product.name,
        img_url: product.poster_urls[0],
        description: product.description
      })
    );
  };

  const navigate = useNavigate();
  const goToWhishlistPage = () => {
    navigate("/wishlist");
  };

  return (
    <Box sx={{ px: 2 }}>
      <Typography variant="h3">{product.name}</Typography>
      <Typography variant="h6" sx={{ my: 2 }}>
        {product.description}
      </Typography>
      <Button variant="outlined">
        {avgRating} ⭐ | {reviews.length} Reviews
      </Button>
      <Stack direction="row" sx={{ mt: 4 }}>
        <Typography variant="h5">
          <span>
            ₹
            {!product.discount?.offer_dicount
              ? product.price
              : product.price -
                (product.price * product.discount?.offer_dicount) / 100}
          </span>
          &nbsp;&nbsp;&nbsp;
        </Typography>
        <Typography>
          <span>
            <strike>₹{product.price}</strike>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#388E3C" }}>
            {product?.discount?.offer_dicount
              ? product?.discount?.offer_dicount
              : "0"}
            % off
          </span>
        </Typography>
      </Stack>
      <Typography variant="subtitle2" sx={{ color: "darkgreen" }}>
        Inclusive all taxes
      </Typography>
      <Stack spacing={2} direction="row" sx={{ mt: 4 }}>
        {product.quantity > 0
          ? (
          <Button
            variant="contained"
            color="success"
            sx={{ px: 4, py: 2 }}
            onClick={addToCartHandler}
          >
            <AddShoppingCartIcon sx={{ pr: 1 }} />
            ADD TO CARD
          </Button>
            )
          : (
          <Button variant="contained" color="warning" sx={{ px: 4, py: 2 }}>
            <AddShoppingCartIcon sx={{ pr: 1 }} />
            OUT OF STOCK
          </Button>
            )}
        {whishlistIds.includes(product.id)
          ? (
          <Button
            variant="outlined"
            color="secondary"
            sx={{ px: 4, py: 2 }}
            onClick={goToWhishlistPage}
          >
            <FavoriteIcon sx={{ pr: 1 }} />
            WHISHLISTED
          </Button>
            )
          : (
          <Button
            variant="outlined"
            color="secondary"
            sx={{ px: 4, py: 2 }}
            onClick={addToWishlistHandler}
          >
            <FavoriteBorderIcon sx={{ pr: 1 }} />
            WHISHLIST
          </Button>
            )}
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

ProductDetails.propTypes = {
  product: PropTypes.object
};

export default ProductDetails;
