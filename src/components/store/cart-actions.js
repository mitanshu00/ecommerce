export const sendAddToCartData = (data) => {
  // const dispatch = useDispatch();
  return (dispatch) => {
    const sendRequest = async () => {
      fetch("https://f14c-103-240-35-190.in.ngrok.io/login/", {
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
          // localStorage.setItem("token", token);
          // localStorage.setItem("userData", userData);
          // dispatch(authActions.login(userData));
        })
        .catch((error) => {
          console.error(error);
        });
    };

    sendRequest();
  };
};
