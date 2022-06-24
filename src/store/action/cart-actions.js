export const sendAddToCartData = (data, token) => {
  return (dispatch) => {
    const sendRequest = async () => {
      fetch("https://fe90-103-240-35-190.in.ngrok.io/cart_items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product_id: data.id,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // const { user, token } = data;
          // localStorage.setItem("token", token);
          // localStorage.setItem("userData", userData);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    sendRequest();
  };
};
