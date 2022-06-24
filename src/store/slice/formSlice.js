import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "login-form",
  initialState: {
    email: "",
    password: "",
    isTouched: {
      email: false,
      password: false,
    },
    isLoggedIn: false,
    errorMsg: "",
  },
  reducers: {
    login(state, action) {
      state.errorMsg = action.payload;
      console.log(state.errorMsg);
    },
    emailChangeHandler(state, action) {
      state.email = action.payload;
    },
    passwordChangeHandler(state, action) {
      state.password = action.payload;
    },

    emailBlurHandler(state) {
      state.isTouched.email = true;
    },
    passwordBlurHandler(state) {
      state.isTouched.password = true;
    },

    submitHandler(state) {
      const data = {
        email: state.email,
        password: state.password,
      };
      state.isLoggedIn = true;
      console.log(data);

      state.email = "";
      state.isTouched.email = false;
      state.password = "";
      state.isTouched.password = false;
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice;
