import React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Favorite from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NavMenu({ isAuth, handleProfileMenuOpen }) {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.auth.user.name);

  const onWhishlistClick = () => {
    navigate("/wishlist");
  };

  const onCartClick = () => {
    navigate("/cart");
  };

  return (
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
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>

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
          <p>{isAuth ? userDetails : "Profile"}</p>
        </MenuItem>
      ) : (
        <MenuItem>
          <p>Login</p>
        </MenuItem>
      )}
    </Stack>
  );
}

export default NavMenu;
