import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    subTotal: 0,
    cartId: null
  },
  reducers: {
    toggle (state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    replaceCart (state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.subTotal = action.payload.subTotal;
    },
    addItemToCart (state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          description: newItem.description,
          img_url: newItem.img_url
        });
        state.subTotal = state.subTotal + newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.subTotal = state.subTotal + newItem.price;
      }
    },
    removeItemFromCart (state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.subTotal = state.subTotal - existingItem.price;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        state.subTotal = state.subTotal - existingItem.price;
      }
    },
    removeItemWholeItem (state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.items = state.items.filter((item) => item.id !== id);
      state.subTotal = state.subTotal - existingItem.totalPrice;
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice;
