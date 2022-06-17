import React from "react";
import { useSelector } from "react-redux";
import WishlistItems from "./WishlistItems";

function Wishlist() {
  const WishlistItem = useSelector((state) => state.cart.wishItems);
  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {WishlistItem.map((item) => (
          <WishlistItems
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default Wishlist;
