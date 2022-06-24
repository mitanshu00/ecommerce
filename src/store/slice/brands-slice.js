import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  brands: [],
};

const brandslice = createSlice({
  name: "brands",
  initialState: initialAuthState,
  reducers: {
    add(state, action) {
      state.brands = action.payload;
    },
  },
});

export const brandActions = brandslice.actions;

export default brandslice;
