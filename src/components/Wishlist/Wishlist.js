import React from "react";
import { useSelector } from "react-redux";
import WishlistItems from "./WishlistItems";
import classes from "../cart/cart.module.css";

function Wishlist() {
  const WishlistItem = useSelector((state) => state.cart.wishItems);
  return (
    <div className={classes.containerr}>
      <h1>My Wishlist ❤️</h1>

      <div className={classes.container2}>
        {WishlistItem.length === 0 ? (
          <div className={classes.empty}>
            <h1>Your cart is empty ☹️</h1>
          </div>
        ) : (
          <ul>
            {WishlistItem.map((item) => (
              <WishlistItems
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
      </div>
    </div>
  );
}

export default Wishlist;
