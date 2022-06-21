import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    user: {},
    isAuthenticated: false,
    loading: false,
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      console.log(state.user);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = {};
    },
    loading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
