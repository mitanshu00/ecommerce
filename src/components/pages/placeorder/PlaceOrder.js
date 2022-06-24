import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./PlaceOrder.module.css";
import { useCallback, useState, useEffect } from "react";
import { sendOrderData } from "../../../store/action/PlaceOrder-action";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const MainTotal = useSelector((state) => state.cart.subTotal);
  const token = useSelector((state) => state.auth.user.token);

  const [page, setPage] = useState(0);
  const [finalAdd, setFinalAdd] = useState([]);
  const [state, setState] = useState([]);
  const [cardData, setCardData] = useState({
    cardNum: 0,
    expire: 0,
    cvv: 0,
    owner: "",
  });

  const fetchDataHandler = useCallback(() => {
    fetch(`${process.env.REACT_APP_API_URL}/user_addresses`, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setState(data);
      });
  }, [token]);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  const CardDataSetHandler = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const DeliveryAddress = (id) => {
    let arr = state.filter((item) => item.id === id);
    setFinalAdd(arr);
    setPage((cur) => cur + 1);
  };

  const summeryHandler = (e) => {
    if (page === 1) {
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

  // const formStep = (e) => {
  //   if (page === 2) {
  //     e.preventDefault();
  //     alert("Form Submitted");
  //     console.log(cardData);
  //     console.log(finalAdd);
  //   } else {
  //     setPage((cur) => cur + 1);
  //   }
  // };
  // const PrevStep = () => {
  //   setPage((cur) => cur - 1);
  // };

  return (
    <div className={styles.container}>
      {page === 0 && (
        <div className={styles.form}>
          <div className={styles.con2}>
            <h1>Select a delivery address</h1>
            <div className={styles.rowcard}>
              {state.length === 0 && <p>no address available.</p>}
              {state.length > 0 &&
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

                    <button onClick={() => DeliveryAddress(item.id)}>
                      Deliver to this address
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
      {page === 1 && (
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
                      Price ({cartQuantity}{" "}
                      {cartQuantity === 1 ? "item" : "items"})
                    </p>
                    <p>₹ {MainTotal}</p>
                  </div>
                  <div className={styles.amount}>
                    <p>Discount/Delevery charges</p>
                    <p>₹ 0</p>
                  </div>
                  <hr />
                  <div className={styles.amount}>
                    <h4>Total Amount</h4>
                    <h4>₹ {MainTotal}</h4>
                  </div>
                </div>
                <botton onClick={summeryHandler}>Proceed To Pay</botton>
              </div>
            </div>
          </div>
        </div>
      )}
      {page === 2 && (
        <div className={styles.form}>
          <div className={styles.con2}>
            <h1>Payment Details</h1>

            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-4 col-md-offset-4">
                  <div className="panel panel-default">
                    <div className="panel-heading mb-3">
                      <div className="row">
                        <img
                          className="img-responsive cc-img"
                          src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png"
                          alt="debitcard"
                        />
                      </div>
                    </div>
                    <div className="panel-body">
                      <form>
                        <div className="row mb-3">
                          <div className="col-xs-12">
                            <div className="form-group">
                              <label>CARD NUMBER</label>
                              <div className="input-group">
                                <input
                                  value={cardData.cardNum}
                                  name="cardNum"
                                  type="number"
                                  className="form-control"
                                  placeholder="Valid Card Number"
                                  onChange={CardDataSetHandler}
                                />
                                <span className="input-group-addon">
                                  <span className="fa fa-credit-card"></span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-xs-7 col-md-7">
                            <div className="form-group">
                              <label>
                                <span className="hidden-xs">EXPIRATION</span>
                                <span className="visible-xs-inline">
                                  EXP
                                </span>{" "}
                                DATE
                              </label>
                              <input
                                value={cardData.expire}
                                name="expire"
                                type="number"
                                className="form-control"
                                placeholder="MM / YY"
                                onChange={CardDataSetHandler}
                              />
                            </div>
                          </div>
                          <div className="col-xs-5 col-md-5 pull-right">
                            <div className="form-group">
                              <label>CV CODE</label>
                              <input
                                value={cardData.cvv}
                                name="cvv"
                                type="number"
                                className="form-control"
                                placeholder="CVC"
                                onChange={CardDataSetHandler}
                                maxLength={3}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-xs-12">
                            <div className="form-group">
                              <label>CARD OWNER</label>
                              <input
                                value={cardData.owner}
                                name="owner"
                                type="text"
                                className="form-control"
                                placeholder="Card Owner Names"
                                onChange={CardDataSetHandler}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="panel-footer">
                      <div className="row">
                        <div className="col-xs-12">
                          <button className="btn btn-warning btn-lg btn-block">
                            Process payment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <div className={styles.footer}>
        <button
          type="button"
          onClick={PrevStep}
          className={page === 1 || page === 2 ? "" : styles.prev}
        >
          {page === 0 ? "" : "Prev"}
        </button>
        <button type="button" onClick={formStep}>
          {page === 0 || page === 1 ? "Next" : "Submit"}
        </button>
      </div> */}
    </div>
  );
};

export default PlaceOrder;
