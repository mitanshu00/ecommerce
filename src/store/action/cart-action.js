import { cartActions } from "../slice/cart-slice";

export const fetchCartData = (userId) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/carts/?user_id=${userId}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      console.log(cartData);
      //   dispatch(
      //     cartActions.replaceCart({
      //       // !
      //       items: cartData.items || [],
      //       totalQuantity: cartData.totalQuantity,
      //     })
      //   );
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/cart_items`,
        {
          method: "PUT",
          body: JSON.stringify({
            // !
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log("error", error);
    }
  };
};
