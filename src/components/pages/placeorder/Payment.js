import React from "react";
import styles from "./PlaceOrder.module.css";
import PropTypes from "prop-types";
import RButton from "../../ReusableComponents/Button";

const Payment = ({ state, DeliveryAddress }) => (
  <div className={styles.form}>
    <div className={styles.con2}>
      <h1>Select a delivery address</h1>
      <div className={styles.rowcard}>
        {state.length === 0 ? (
          <p>no address available.</p>
        ) : (
          state.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.name}>
                <h4>{item.mobile_no}</h4>
              </div>
              <p>{item.address_line1}</p>
              <p>{item.address_line2}</p>
              <p>
                {item.city}-{item.postal_code}
              </p>
              <p>
                {item.state}, {item.country}
              </p>

              <RButton onClick={() => DeliveryAddress(item.id)} fullWidth>
                Deliver to this address
              </RButton>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
);

Payment.propTypes = {
  state: PropTypes.array,
  DeliveryAddress: PropTypes.func,
};

export default Payment;
