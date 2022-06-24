import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../../store/slice/auth-slice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 4,
  p: 4,
};

export default function BasicModal({ open, setOpen }) {
  const [form, setForm] = useState({
    pan_id: "",
    gst_id: "",
    seller_location: "",
  });

  let userInfo = useSelector((state) => state.auth.user);
  // console.log(userInfo);

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
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        console.log(data);
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
              <TextField
                name="name"
                label="Fullname"
                variant="outlined"
                value={userInfo?.name}
                disabled
              />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                value={userInfo?.email}
                disabled
              />
              <TextField
                name="pan_id"
                label="PAN no."
                variant="outlined"
                value={form.pan_id}
                onChange={(e) => handleChange(e)}
                required
              />
              <TextField
                name="gst_id"
                label="GSTIN no."
                variant="outlined"
                value={form.gst_id}
                onChange={(e) => handleChange(e)}
                required
              />
              <TextField
                name="seller_location"
                label="your city"
                variant="outlined"
                value={form.seller_location}
                onChange={(e) => handleChange(e)}
                required
              />
              <Button variant="contained" color="primary" type="submit">
                Register
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
