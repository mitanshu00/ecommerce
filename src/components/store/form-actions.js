import { useDispatch } from "react-redux/es/exports";
import { authActions } from "./auth-slice";

export const sendFormData = (data) => {
  // const dispatch = useDispatch();
  return (dispatch) => {
    const sendRequest = async () => {
      fetch("https://384e-103-240-35-190.in.ngrok.io/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.enteredEmail,
          password: data.enteredPassword,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const { userData, token } = data;
          localStorage.setItem("token", token);
          localStorage.setItem("userData", userData);
          dispatch(authActions.login(userData));
          dispatch(authActions.loading(false));
        })
        .catch((error) => {
          dispatch(authActions.loading(false));
          console.error(error);
        });
    };

    sendRequest();
  };
};
