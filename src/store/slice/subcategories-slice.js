import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subcategories: [],
};

const subcategoryslice = createSlice({
  name: "subcategories",
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.subcategories = action.payload;
    },
  },
});

export const subCatActions = subcategoryslice.actions;

export default subcategoryslice;
