import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register-form",
  initialState: {
    name: "",
    phone: "",
    email: "",
    password: "",
    isTouched: {
      name: false,
      phone: false,
      email: false,
      password: false,
    },
  },
  reducers: {
    nameChangeHandler(state, action) {
      state.name = action.payload;
    },
    mobileChangeHandler(state, action) {
      state.phone = action.payload;
    },
    emailChangeHandler(state, action) {
      state.email = action.payload;
    },
    passwordChangeHandler(state, action) {
      state.password = action.payload;
    },

    nameBlurHandler(state) {
      state.isTouched.name = true;
    },
    mobileBlurHandler(state) {
      state.isTouched.phone = true;
    },
    emailBlurHandler(state) {
      state.isTouched.email = true;
    },
    passwordBlurHandler(state) {
      state.isTouched.password = true;
    },

    submitHandler(state) {
      const data = {
        name: state.name,
        phone: state.phone,
        email: state.email,
        password: state.password,
      };

      console.log(data);

      state.name = "";
      state.isTouched.name = false;
      state.phone = "";
      state.isTouched.phone = false;
      state.email = "";
      state.isTouched.email = false;
      state.password = "";
      state.isTouched.password = false;
    },
  },
});

export const registerActions = registerSlice.actions;

export default registerSlice;
