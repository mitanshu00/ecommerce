import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  user: {},
  isVerified: false,
  isAuthenticated: false,
  isSeller: false,
  registeredForSeller: false,
  sellerId: null,
  loading: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = {};
    },
    loading(state, action) {
      state.loading = action.payload;
    },
    registeredForSeller(state) {
      state.registeredForSeller = true;
    },
    setSellerId(state, action) {
      state.isSeller = true;
      state.sellerId = action.payload;
      state.registeredForSeller = false;
    },
    otpVerify(state){
      state.isVerified = true;
    }
  },
});

export const authActions = authSlice.actions;

export default authSlice;
