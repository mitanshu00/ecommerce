import { authActions } from "../slice/auth-slice";

export const sendFormData = (data) => {
  return async (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}login`, {
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
        dispatch(authActions.login(data));
        console.log(data);
        localStorage.setItem("auth", JSON.stringify(data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
