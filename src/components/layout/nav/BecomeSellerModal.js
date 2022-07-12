import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RButton from "../../ReusableComponents/Button";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../../store/slice/auth-slice";
import { modelStyle } from "../../Styles/common";
import PropTypes from "prop-types";
import Input from "../../ReusableComponents/Input";

// model style
const style = {
  ...modelStyle,
};

export default function BasicModal({ open, setOpen }) {
  const [form, setForm] = useState({
    pan_id: "",
    gst_id: "",
    seller_location: "",
  });

  const userDetails = useSelector((state) => state.auth.user);
  const userInfo = userDetails.user;
  const token = userDetails.token;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/sellers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        pan_id: form.pan_id,
        gst_id: form.gst_id,
        seller_location: form.seller_location,
        user_id: userInfo.id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(authActions.registeredForSeller());
        dispatch(authActions.setSellerId(data.id));
        localStorage.setItem("seller", JSON.stringify(data.id));
      })
      .catch((error) => {
        console.error(error);
      });
    setOpen(false);
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            align="center"
            sx={{ mb: 4 }}
          >
            Register for Seller
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3} justifyContent="center">
              <Input
                name="name"
                label="Fullname"
                variant="outlined"
                value={userInfo?.name}
                disabled
              />
              <Input
                name="email"
                label="Email"
                variant="outlined"
                value={userInfo?.email}
                disabled
              />
              <Input
                name="pan_id"
                label="PAN no."
                variant="outlined"
                value={form.pan_id}
                onChange={(e) => handleChange(e)}
              />
              <Input
                name="gst_id"
                label="GSTIN no."
                variant="outlined"
                value={form.gst_id}
                onChange={(e) => handleChange(e)}
              />
              <Input
                name="seller_location"
                label="your city"
                variant="outlined"
                value={form.seller_location}
                onChange={(e) => handleChange(e)}
              />
              <RButton variant="contained" color="primary" type="submit">
                Register
              </RButton>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

BasicModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
