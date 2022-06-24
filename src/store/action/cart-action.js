import { cartActions } from "../slice/cart-slice";

export const clearCart = () => {
  return (dispatch) => {
    dispatch(
      cartActions.replaceCart({
        items: [],
        totalQuantity: 0,
        subTotal: 0,
        cartId: null,
      })
    );
  };
};

export const fetchCartData = (token) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}cart_items`,
        { headers: { authorization: `Bearer ${token}` } }
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      let totalQuantity = 0;
      let subTotal = 0;

      cartData.map((item) => (totalQuantity += item.item_quantity));
      cartData.map((item) => (subTotal += totalQuantity * item.product.price));

      let newCartData = cartData.map((item) => ({
        id: item.product.id,
        name: item.product.name,
        description: item.product.description,
        price: item.product.price,
        quantity: item.item_quantity,
        totalPrice: item.item_quantity * item.product.price,
        img_url: [...item.product.poster_urls],
      }));

      dispatch(
        cartActions.replaceCart({
          items: newCartData || [],
          totalQuantity: totalQuantity || 0,
          subTotal: subTotal || 0,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendCartData = (token, id) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/cart_items/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            product_id: id,
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

export const removeCartItem = (token, id) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/cart_items/${id}`,
        { headers: { authorization: `Bearer ${token}` } }
      );

      if (!response.ok) {
        throw new Error("deleting cart item failed");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log("error", error);
    }
  };
};
