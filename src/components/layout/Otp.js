import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Modal, Box, Paper, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/slice/auth-slice";
import PropTypes from "prop-types";

import { modelStyle as styles } from "../Styles/common";
import RButton from "../ReusableComponents/Button";

const modelStyle = {
  ...styles,
  width: 600,
  height: 500,
};

const Otp = ({ handleClose }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleChange = (value) => setOtp(value);

  const token = useSelector((state) => state.auth.user.token);

  const dispatch = useDispatch();
  const verifyOtpHandler = () => {
    fetch(`${process.env.REACT_APP_API_URL}/verify?otp=${otp}`, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (res.ok) return res.json();
        else {
          throw new Error("something went wrong");
        }
      })
      .then((data) => {
        if (data.error) setError(data.error);
        if (data.masssage === "is_varified") {
          dispatch(authActions.otpVerify());
          handleClose();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modelStyle}>
        <Paper elevation={4}>
          <Stack justifyContent="center" sx={{ p: 8 }}>
            <p>Email sent to your email address.</p>
            <p style={{ color: "red" }}>{error}</p>
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={6}
              separator={<span>-</span>}
              isInputNum={true}
              shouldAutoFocus={true}
              inputStyle={{
                border: "1px solid gray",
                borderRadius: "8px",
                width: "54px",
                height: "54px",
                fontSize: "12px",
                color: "black",
                margin: "30px 7px",
                fontWeight: "400",
                caretColor: "blue",
              }}
              focusStyle={{
                border: "1px solid #CFD3DB",
                outline: "none",
              }}
            />
            <RButton variant="contained" onClick={verifyOtpHandler}>
              Verify
            </RButton>
          </Stack>
        </Paper>
      </Box>
    </Modal>
  );
};

Otp.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default Otp;
