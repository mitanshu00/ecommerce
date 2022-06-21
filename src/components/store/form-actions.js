// import { useDispatch } from "react-redux";
import { authActions } from "./auth-slice";

export const sendFormData = (data) => {
  return (dispatch) => {
    const sendRequest = async () => {
      fetch("https://f9c7-103-240-35-190.in.ngrok.io/api/v1/login", {
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
          const { user, token } = data;
          console.log(user);
          localStorage.setItem("token", token);
          localStorage.setItem("userData", user);
          dispatch(authActions.login({ user }));
        })
        .catch((error) => {
          console.error(error);
        });
    };

    sendRequest();
  };
};
