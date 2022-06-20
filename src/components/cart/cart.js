import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./cartItems";
import classes from "./cart.module.css";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const MainTotal = useSelector((state) => state.cart.subTotal);
  return (
    <div className={classes.containerr}>
      <h1>My Cart ({cartQuantity})</h1>

      <div className={classes.container2}>
        {cartItems.length === 0 ? (
          <div className={classes.empty}>
            <h1>Your cart is empty ☹️</h1>
          </div>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  id: item.id,
                  title: item.name,
                  quantity: item.quantity,
                  total: item.totalPrice,
                  price: item.price,
                  description: item.description,
                  image: item.image,
                }}
              />
            ))}
          </ul>
        )}
        <div className={classes.proceed}>
          <div className={classes.proceed1}>
            <p>
              Total Amount ({cartQuantity}{" "}
              {cartQuantity === 1 ? "item" : "items"}):
            </p>
            <h1>₹ {MainTotal}</h1>
          </div>
          <div className={classes.proceed2}>
            <Link to="/placeorder">
              <button className={classes.proceed3}>Proceed to Buy</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
