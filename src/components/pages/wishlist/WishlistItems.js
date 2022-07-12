import React from "react";
import { useDispatch } from "react-redux";
// import { WhishlistActions } from "../../../store/slice/whishlist-slice";

import { WhishlistActions } from "../../../store/slice/whishlist-slice";
import classes from "../cart/cartItems.module.css";
import { cartActions } from "../../../store/slice/cart-slice";
import RButton from "../../ReusableComponents/Button";
import PropTypes from "prop-types";

const WishlistItems = (props) => {
  const dispatch = useDispatch();
  const { title, price, id, description, image } = props.item;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        description,
        image,
      })
    );
  };
  const removeItemFromWishlist = () => {
    dispatch(WhishlistActions.removeItemFromWishlist(id));
  };
  return (
    <div className={classes.cardbox}>
      <li className={classes.list}>
        <div className={classes.image}>
          <img src={image} alt="a product" />
        </div>
        <div className={classes.dtlscon}>
          <div className={classes.txt}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className={classes.quantityconn}>
            <RButton
              variant="contained"
              sx={{ marginBottom: 2 }}
              onClick={addToCartHandler}
            >
              Add to Cart
            </RButton>
            <RButton
              variant="contained"
              sx={{ marginBottom: 2 }}
              onClick={removeItemFromWishlist}
            >
              Delete
            </RButton>
          </div>
        </div>
        <div className={classes.price}>
          <h2>₹{price}</h2>
        </div>
        {/* <div className={classes.totalprc}>{total}</div> */}
      </li>
    </div>
  );
};

WishlistItems.propTypes = {
  item: PropTypes.object,
};

export default WishlistItems;
