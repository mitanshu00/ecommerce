import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

function CartItem(props) {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <div>
      <li>
        <div>{title}</div>
        <div>{price}</div>
        <div>{quantity}</div>
        <div>{total}</div>
        <div>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </li>
    </div>
  );
}

export default CartItem;
