import React from "react";
import { useDispatch } from "react-redux";
// import { WhishlistActions } from "../../../store/slice/whishlist-slice";

import { WhishlistActions } from "../../../store/slice/whishlist-slice";
import classes from "../cart/cartItems.module.css";
import { Button } from "@mui/material";

const WishlistItems = (props) => {
  const dispatch = useDispatch();
  const { title, price, id, description, image } = props.item;

  const addToCartHandler = () => {
    dispatch(
      WhishlistActions.addItemToCart({
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
            <Button
              variant="contained"
              sx={{ marginBottom: 2 }}
              onClick={addToCartHandler}
            >
              Add to Cart
            </Button>
            {/* <button onClick={removeWholeItemFromCart}>Remove</button> */}
            <Button
              variant="contained"
              sx={{ marginBottom: 2 }}
              onClick={removeItemFromWishlist}
            >
              Delete
            </Button>
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

export default WishlistItems;
