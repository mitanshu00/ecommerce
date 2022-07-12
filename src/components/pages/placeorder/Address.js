import React, { useState } from "react";
import styles from "./PlaceOrder.module.css";
import PropTypes from "prop-types";
import RButton from "../../ReusableComponents/Button";

const Address = ({ summeryHandler }) => {
  const [cardData, setCardData] = useState({
    cardNum: 0,
    expire: 0,
    cvv: 0,
    owner: "",
  });

  const CardDataSetHandler = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  return (
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
                            <span className="visible-xs-inline">EXP</span> DATE
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
                      <RButton onClick={summeryHandler}>
                        Process payment
                      </RButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Address.propTypes = {
  summeryHandler: PropTypes.func,
};

export default Address;
