import { authActions } from "../slice/auth-slice";

export const authCheck = () => {
  return (dispatch) => {
    const data = localStorage.getItem("auth");
    if (data) {
      dispatch(authActions.login(JSON.parse(data)));
    }
  };
};

export const authLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("auth");
    dispatch(authActions.logout());
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
