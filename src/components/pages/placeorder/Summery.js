import React from "react";
import { useSelector } from "react-redux";
import styles from "./PlaceOrder.module.css";
import RButton from "../login-reg/ReusableComponents/Button";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Summery = ({ setpage }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const MainTotal = useSelector((state) => state.cart.subTotal);

  return (
    <div className={styles.form}>
      <div className={styles.con2}>
        <h1>Order Summery</h1>
        <div className={styles.bigcard}>
          <div className={styles.card1}>
            {cartItems.map((item) => (
              <div className={styles.list} key={item.id}>
                <div className={styles.image}>
                  <img src={item.img_url[0]} alt="img" />
                </div>
                <div className={styles.dtlscon}>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <p>Quantity : {item.quantity}</p>
                </div>
                <div className={styles.price}>
                  <h2>₹{item.price}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.card2}>
            <div className={styles.proceed1}>
              <h5>PRICE DETAILS</h5>
              <hr />
              <div className={styles.amount}>
                <p>
                  Price ({cartQuantity} {cartQuantity === 1 ? "item" : "items"})
                </p>
                <p>₹ {MainTotal}</p>
              </div>
              <div className={styles.amount}>
                <p>Discount/Delivery charges</p>
                <p>₹ 0</p>
              </div>
              <hr />
              <div className={styles.amount}>
                <h4>Total Amount</h4>
                <h4>₹ {MainTotal}</h4>
              </div>
            </div>
            <Box sx={{ textAlign: "center" }}>
              <RButton variant="text" onClick={() => setpage((cur) => cur + 1)}>
                Proceed To Pay
              </RButton>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

Summery.propTypes = {
  setpage: PropTypes.func,
};

export default Summery;
