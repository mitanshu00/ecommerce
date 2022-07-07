import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import Footer from "../Footer";
import { useNavigate, Outlet } from "react-router-dom";
import NavMenu from "./NavMenu";
import SearchBar from "./search-bar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../../store/action/auth-action";
import Otp from "../Otp";

export default function Navbar ({ isAuth }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [otpModel, setOtpModel] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // open/close otp model
  const handleOtpModelOpen = () => setOtpModel(true);
  const handleOtpModelClose = () => setOtpModel(false);

  const isVerified = useSelector((state) => state.auth.isVerified);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLogout = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    dispatch(authLogout());
  };

  const onMyAccountClick = () => {
    navigate("/profile");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const onVerifyClick = () => {
    handleOtpModelOpen();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={onMyAccountClick}>My account</MenuItem>
      {!isVerified && <MenuItem onClick={onVerifyClick}>Verify email</MenuItem>}
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <NavMenu handleProfileMenuOpen={handleProfileMenuOpen} />
    </Menu>
  );

  return (
    <>
      <Box>
        {otpModel && <Otp handleClose={handleOtpModelClose} />}
        <AppBar position="static" style={{ background: "#2E3B55" }}>
          <Toolbar sx={{ maxWidth: "1500px", margin: "0 auto" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block", cursor: "pointer" } }}
              onClick={() => navigate("/")}
            >
              Ecommerce
            </Typography>

            <SearchBar />

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <NavMenu
                isAuth={isAuth}
                handleProfileMenuOpen={handleProfileMenuOpen}
              />
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Box sx={{ maxWidth: "1500px", margin: "30px auto", minHeight: "90vh" }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
