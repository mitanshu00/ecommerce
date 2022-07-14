import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItems";
import classes from "./cart.module.css";
import { Link } from "react-router-dom";
import RButton from "../../ReusableComponents/Button";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const MainTotal = useSelector((state) => state.cart.subTotal);

  return (
    <div className={classes.containerr}>
      <h1>My Cart ({cartQuantity})</h1>

      <div className={classes.container2}>
        {cartItems.length === 0 ? (
          <h3>Your cart is empty ☹️</h3>
        ) : (
          <ul>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={{
                    id: item.id,
                    name: item.name,
                    quantity: item.quantity,
                    total: item.totalPrice,
                    price: item.price,
                    description: item.description,
                    image: item.img_url,
                  }}
                />
              ))
            ) : (
              <></>
            )}
          </ul>
        )}
        {cartItems.length > 0 ? (
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
                <RButton>Proceed to Buy</RButton>
              </Link>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Cart;
