import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    wishItems: [],
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    addItemToWishlist(state, action) {
      const favItem = action.payload;
      const existingItem = state.wishItems.find(
        (item) => item.id === favItem.id
      );
      if (!existingItem) {
        state.wishItems.push({
          id: favItem.id,
          price: favItem.price,
          name: favItem.title,
        });
      } else {
        return;
      }
    },
    removeItemFromWishlist(state, action) {
      const id = action.payload;
      state.wishItems = state.wishItems.filter((item) => item.id !== id);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
