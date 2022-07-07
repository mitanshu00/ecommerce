import { createSlice } from "@reduxjs/toolkit";

const whishlistSlice = createSlice({
  name: "whishlist",
  initialState: {
    wishItems: [],
    itemIds: []
  },
  reducers: {
    replaceWhishItems (state, action) {
      state.wishItems = action.payload;
    },
    addItemToWishlist (state, action) {
      const favItem = action.payload;
      const existingItem = state.wishItems.find(
        (item) => item.id === favItem.id
      );
      if (!existingItem) {
        state.wishItems.push({
          id: favItem.id,
          price: favItem.price,
          name: favItem.name,
          description: favItem.description,
          img_url: favItem.img_url
        });
        state.itemIds.push(favItem.id);
      } else {

      }
    },
    removeItemFromWishlist (state, action) {
      const id = action.payload;
      state.wishItems = state.wishItems.filter((item) => item.id !== id);
      state.itemIds = state.itemIds.filter((iId) => iId !== id);
    }
  }
});

export const WhishlistActions = whishlistSlice.actions;

export default whishlistSlice;
