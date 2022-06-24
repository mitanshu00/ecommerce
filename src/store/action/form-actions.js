// import { useDispatch } from "react-redux";
import { authActions } from "../slice/auth-slice";
import { formActions } from "../slice/formSlice";

export const sendFormData = (data) => {
  return (dispatch) => {
    const sendRequest = async () => {
      fetch("https://fe90-103-240-35-190.in.ngrok.io/api/v1/login", {
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
          const { user, token, error } = data;
          console.log(user);
          localStorage.setItem("token", token);
          localStorage.setItem("auth", JSON.stringify(data));
          dispatch(formActions.login(error));
          if (!error) {
            dispatch(authActions.login(data));
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    sendRequest();
  };
};
