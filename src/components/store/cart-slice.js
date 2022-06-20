import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    wishItems: [],
    items: [],
    totalQuantity: 0,
    subTotal: 0,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
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
          description: newItem.description,
          image: newItem.image,
        });
        state.subTotal = state.subTotal + newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.subTotal = state.subTotal + existingItem.price;
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
      state.subTotal = state.subTotal - existingItem.price;
    },
    removeItemWholeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.items = state.items.filter((item) => item.id !== id);
      state.subTotal = state.subTotal - existingItem.totalPrice;
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
          description: favItem.description,
          image: favItem.image,
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
