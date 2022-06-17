import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth-slice";
import categoryslice from "./slice/categories-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    category: categoryslice.reducer,
  },
});

export default store;

// cart
// whishlist
// categories