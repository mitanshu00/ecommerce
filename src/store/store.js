import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;

// cart
// whishlist
