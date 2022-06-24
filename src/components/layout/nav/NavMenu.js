import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Favorite from "@mui/icons-material/Favorite";
import BecomeSeller from "./BecomeSellerModal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NavMenu({ handleProfileMenuOpen }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.auth);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  let isAuth = userDetails.isAuthenticated;
  let isSeller = userDetails.sellerId;

  const handleOpen = () => setOpen(true);

  const onWhishlistClick = () => {
    navigate("/wishlist");
  };

  const onCartClick = () => {
    navigate("/cart");
  };

  const onLoginClick = () => {
    navigate("/login");
  };

  const goToSellerDash = () => {
    navigate("/seller");
  };

  return (
    <>
      <BecomeSeller open={open} setOpen={setOpen} />
      <Stack direction={{ xs: "column", sm: "row" }}>
        <MenuItem onClick={onWhishlistClick}>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Favorite />
          </IconButton>
          <p>Whishlist</p>
        </MenuItem>
        <MenuItem onClick={onCartClick}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={cartQuantity} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>

        {isAuth && isSeller && (
          <MenuItem onClick={goToSellerDash}>
            <p>Seller Dashboard</p>
          </MenuItem>
        )}

        {isAuth && !isSeller && userDetails.registeredForSeller && (
          <MenuItem>
            <p>Request Pending</p>
          </MenuItem>
        )}

        {isAuth && !isSeller && !userDetails.registeredForSeller && (
          <MenuItem onClick={handleOpen}>
            <p>Become Seller</p>
          </MenuItem>
        )}

        {isAuth ? (
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>{userDetails?.user?.user?.name} </p>
            {!userDetails.isVerified && (
              <p style={{ fontSize: "x-small", color: "yellow" }}>
                (Not Verified)
              </p>
            )}
          </MenuItem>
        ) : (
          <MenuItem onClick={onLoginClick}>
            <p>Login</p>
          </MenuItem>
        )}
      </Stack>
    </>
  );
}

export default NavMenu;
