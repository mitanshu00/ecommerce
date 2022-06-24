import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/slice/cart-slice";

const CarttItems = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, price, id, description, image } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const removeWholeItemFromCart = () => {
    dispatch(cartActions.removeItemWholeItem(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        title,
        quantity,
        price,
        id,
        description,
        image,
      })
    );
  };
  return (
    <div
      className="row mb-4 d-flex justify-content-between align-items-center"
      key={id}
    >
      <div className="col-md-2 col-lg-2 col-xl-2">
        <img src={image} className="img-fluid rounded-3" alt="Cotton T-shirt" />
      </div>
      <div className="col-md-3 col-lg-3 col-xl-3">
        <h6 className="text-muted">{title}</h6>
        <h6 className="text-black mb-0">{description}</h6>
      </div>
      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
        <button className="btn btn-link px-2" onclick={removeItemHandler}>
          <i className="fas fa-minus"></i>
        </button>

        <p>{quantity}</p>

        <button className="btn btn-link px-2" onclick={addItemHandler}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h6 className="mb-0">{price}</h6>
      </div>
      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
        <a href="#!" className="text-muted" onClick={removeWholeItemFromCart}>
          <i className="fas fa-times"></i>
        </a>
      </div>
    </div>
  );
};

export default CarttItems;
