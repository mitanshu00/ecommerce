import { authActions } from "../slice/auth-slice";
import { formActions } from "../slice/formSlice";

export const sendFormData = (data) => {
  return async (dispatch) => {
    // fetch(`${process.env.REACT_APP_API_URL}/login`, {
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
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
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
};

//? mui error notification
