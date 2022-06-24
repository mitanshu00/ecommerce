import { authActions } from "../slice/auth-slice";
import { clearCart } from "./cart-action";
import { clearWishItems } from "./wishlist-action";

export const authCheck = () => {
  return (dispatch) => {
    const data = localStorage.getItem("auth");
    const seller = localStorage.getItem("seller");
    const isVerified = localStorage.getItem("isverified");

    if (data) {
      dispatch(authActions.login(JSON.parse(data)));
    }
    if (seller) {
      dispatch(authActions.setSellerId(JSON.parse(seller)));
    }
    if (isVerified) {
      dispatch(authActions.otpVerify());
    }
  };
};

export const authLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("seller");
    localStorage.removeItem("isverified");
    dispatch(authActions.logout());
    dispatch(clearCart());
    dispatch(clearWishItems());
    console.log("logout successfull");
  };
};

export const sellerCheck = () => {
  return (dispatch) => {
    const id = localStorage.getItem("seller");
    if (id) {
      dispatch(authActions.setSellerId(JSON.parse(id)));
    }
  };
};
