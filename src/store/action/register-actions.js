import { authActions } from "../slice/auth-slice";

export const sendRegisterData = (data) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.enteredName,
          mobile_number: data.enteredPhone,
          email: data.enteredRegEmail,
          password: data.enteredRegPassword,
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Something went wrong");
        })
        .then((data) => {
          localStorage.setItem("auth", JSON.stringify(data));
          dispatch(authActions.login(data));
        })
        .catch((error) => {
          console.error(error);
        });
    };

    sendRequest();
  };
};
