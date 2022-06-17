import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth-slice";
import categoryslice from "./slice/categories-slice";
import formSlice from "./slice/formSlice";
import registerSlice from "./slice/register-slice";
import cartSlice from "./slice/cart-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    category: categoryslice.reducer,
    login: formSlice.reducer,
    register: registerSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;

// cart
// whishlist
// categories
