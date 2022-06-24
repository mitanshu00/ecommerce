import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/slice/cart-slice";

import classes from "./cartItems.module.css";
import { Button } from "@mui/material";
import { sendCartData } from "../../../store/action/cart-action";
import { useSelector } from "react-redux";

function CartItem(props) {
  const dispatch = useDispatch();

  const { name, quantity, price, id, description, image } = props.item;

  const isAuth = useSelector((state) => state.auth);
  let token = isAuth?.user?.token;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const removeWholeItemFromCart = () => {
    dispatch(cartActions.removeItemWholeItem(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
    dispatch(sendCartData(token, id));
  };

  return (
    <div className={classes.cardbox}>
      <li className={classes.list}>
        <div className={classes.image}>
          {image[0] && <img src={image[0]} alt="" />}
        </div>
        <div className={classes.dtlscon}>
          <div className={classes.txt}>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <div className={classes.quantitycon}>
            <div className={classes.quantity}>
              <button onClick={removeItemHandler}>-</button>
              <p>{quantity}</p>
              <button onClick={addItemHandler}>+</button>
            </div>
            <div className={classes.removebtn}>
              {/* <button onClick={removeWholeItemFromCart}>Remove</button> */}
              <Button variant="contained" onClick={removeWholeItemFromCart}>
                Remove
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.price}>
          <h2>₹{price}</h2>
        </div>
        {/* <div className={classes.totalprc}>{total}</div> */}
      </li>
    </div>
  );
}

export default CartItem;
