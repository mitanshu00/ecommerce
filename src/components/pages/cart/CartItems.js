import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/slice/cart-slice";

import classes from "./cartItems.module.css";
import { sendCartData } from "../../../store/action/cart-action";
import RButton from "../../ReusableComponents/Button";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const { name, quantity, price, id, description, image } = item;

  const isAuth = useSelector((state) => state.auth);
  const token = isAuth?.user?.token;

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
          {image[0] ? <img src={image[0]} alt="" /> : <></>}
        </div>
        <div className={classes.dtlscon}>
          <div className={classes.txt}>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <div className={classes.quantitycon}>
            <div className={classes.quantity}>
              <RButton onClick={removeItemHandler} variant="text">
                -
              </RButton>
              <p>{quantity}</p>
              <RButton onClick={addItemHandler} variant="text">
                +
              </RButton>
            </div>
            <div className={classes.removebtn}>
              <RButton variant="contained" onClick={removeWholeItemFromCart}>
                Remove
              </RButton>
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

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
