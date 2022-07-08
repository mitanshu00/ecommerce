import React, { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./PlaceOrder.module.css";
import { sendOrderData } from "../../../store/action/PlaceOrder-action";
import Payment from "./Payment";
import Summery from "./Summery";
import Address from "./Address";

const PlaceOrder = () => {
  const dispatch = useDispatch();

  const MainTotal = useSelector((state) => state.cart.subTotal);
  const token = useSelector((state) => state.auth.user.token);

  const [page, setPage] = useState(0);
  const [finalAdd, setFinalAdd] = useState([]);
  const [state, setState] = useState([]);

  const fetchDataHandler = useCallback(() => {
    fetch(`${process.env.REACT_APP_API_URL}/user_addresses`, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setState(data);
      });
  }, [token]);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  const DeliveryAddress = (id) => {
    const arr = state.filter((item) => item.id === id);
    setFinalAdd(arr);
    setPage((cur) => cur + 1);
  };

  const summeryHandler = (e) => {
    if (page === 2) {
      e.preventDefault();
      alert("Form Submitted");
      console.log({
        address_id: finalAdd[0].id,
        totalAmount: MainTotal,
      });
      dispatch(
        sendOrderData({
          address_id: finalAdd[0].id,
          totalAmount: MainTotal,
        })
      );
    } else {
      setPage((cur) => cur + 1);
    }
  };

  return (
    <div className={styles.container}>
      {page === 0 && (
        <Payment state={state} DeliveryAddress={DeliveryAddress} />
      )}
      {page === 1 && <Summery setpage={setPage} />}
      {page === 2 && <Address summeryHandler={summeryHandler} />}
    </div>
  );
};

export default PlaceOrder;
