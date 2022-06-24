import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth-slice";
import categoryslice from "./slice/categories-slice";
import formSlice from "./slice/formSlice";
import registerSlice from "./slice/register-slice";
import cartSlice from "./slice/cart-slice";
import whishlistSlice from "./slice/whishlist-slice";
import subcategoryslice from "./slice/subcategories-slice";
import brandslice from "./slice/brands-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    category: categoryslice.reducer,
    subcategory: subcategoryslice.reducer,
    login: formSlice.reducer,
    register: registerSlice.reducer,
    cart: cartSlice.reducer,
    whishlist: whishlistSlice.reducer,
    brand: brandslice.reducer,
  },
});

export default store;
