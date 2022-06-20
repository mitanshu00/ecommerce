import { useDispatch } from "react-redux";
import classes from "./ProductItem.module.css";

import { cartActions } from "../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id, image } = props;

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
  const addToWishListhandler = () => {
    dispatch(
      cartActions.addItemToWishlist({
        id,
        title,
        price,
        description,
        image,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <img src={image} alt="" width="100"></img>
        <h3>{title}</h3>
        <div className={classes.price}>₹{price.toFixed(2)}</div>
      </header>
      <p>{description}</p>
      <div className={classes.actions}>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
      <div>
        <button onClick={addToWishListhandler}>add to Wishlist</button>
      </div>
    </li>
  );
};

export default ProductItem;
