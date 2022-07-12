import React from "react";
import { useSelector } from "react-redux";
import WishlistItems from "./WishlistItems";
import classes from "../cart/cart.module.css";

function Wishlist() {
  const WishlistItem = useSelector((state) => state.whishlist.wishItems);
  return (
    <div className={classes.containerr}>
      <h1>My Wishlist</h1>

      <div className={classes.container2}>
        {WishlistItem.length === 0 ? (
          <h3>Your Wishlist is Empty!</h3>
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
                  image: item.img_url,
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
