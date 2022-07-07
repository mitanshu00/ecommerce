import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  categories: []
};

const categoryslice = createSlice({
  name: "categories",
  initialState: initialAuthState,
  reducers: {
    add (state, action) {
      state.categories = action.payload;
    }
  }
});

export const catActions = categoryslice.actions;

export default categoryslice;
