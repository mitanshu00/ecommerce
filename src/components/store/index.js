import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import registerSlice from "./register-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    login: formSlice.reducer,
    register: registerSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
