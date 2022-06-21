import { createSlice } from "@reduxjs/toolkit";

const whishlistSlice = createSlice({
  name: "whishlist",
  initialState: {
    wishItems: [],
  },
  reducers: {
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
          img_url: favItem.img_url,
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

export const WhishlistActions = whishlistSlice.actions;

export default whishlistSlice;
