import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const WishlistItems = (props) => {
  const dispatch = useDispatch();
  const { id, title, price } = props.item;

  const removeItemFromWishlist = () => {
    dispatch(cartActions.removeItemFromWishlist(id));
  };
  return (
    <div>
      <li>
        <div>{title}</div>
        <div>{price}</div>
        <div>
          <button onClick={removeItemFromWishlist}>delete</button>
        </div>
      </li>
    </div>
  );
};

export default WishlistItems;
