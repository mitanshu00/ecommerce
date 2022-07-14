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
  const userDetails = useSelector((state) => state.auth.user);
  const userInfo = userDetails.user;
  const token = userDetails.token;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const actualData = {
      pan_id: data.get("pan_id"),
      gst_id: data.get("gst_id"),
      seller_location: data.get("seller_location"),
    };

    fetch(`${process.env.REACT_APP_API_URL}/sellers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        pan_id: actualData.pan_id,
        gst_id: actualData.gst_id,
        seller_location: actualData.seller_location,
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
                isRequired
              />
              <Input
                name="gst_id"
                label="GSTIN no."
                variant="outlined"
                isRequired
              />
              <Input
                name="seller_location"
                label="your city"
                variant="outlined"
                isRequired
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
