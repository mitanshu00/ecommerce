import React from "react";
import styles from "./PlaceOrder.module.css";
import { useState } from "react";

const SelectAddress = () => {
  const [page, setPage] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.con2}>
          <h1>Select a delivery address</h1>
          <div className={styles.card}>
            <div className={styles.name}>
              <h4>Firstname</h4>
              <h4>lastName</h4>
            </div>
            <p>Address line 1</p>
            <p>Address line 2</p>
            <p>city-postal code</p>
            <p>state country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAddress;
