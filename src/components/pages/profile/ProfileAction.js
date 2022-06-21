import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ReviewsIcon from "@mui/icons-material/Reviews";
import LogoutIcon from "@mui/icons-material/Logout";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import { authLogout } from "../../../store/action/auth-action";
import { useDispatch } from "react-redux";

export default function ProfileAction({ selecteTab }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleTabChange = (newValue) => {
    selecteTab(newValue);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authLogout());
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          User name
        </ListSubheader>
      }
    >
      <ListItemButton onClick={() => handleTabChange("info")}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Profile information" />
      </ListItemButton>

      <ListItemButton onClick={() => handleTabChange("addr")}>
        <ListItemIcon>
          <ContactMailIcon />
        </ListItemIcon>
        <ListItemText primary="Addresses" />
      </ListItemButton>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LocalShippingIcon />
        </ListItemIcon>
        <ListItemText primary="order" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handleTabChange("completed")}
          >
            <ListItemIcon>
              <CheckCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="completed" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handleTabChange("pending")}
          >
            <ListItemIcon>
              <PendingOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="On the way" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handleTabChange("cancelled")}
          >
            <ListItemIcon>
              <HighlightOffOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Cancelled" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handleTabChange("returned")}
          >
            <ListItemIcon>
              <KeyboardReturnOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Returned" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton>
        <ListItemIcon>
          <FavoriteOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Whishlist" />
      </ListItemButton>

      <ListItemButton onClick={() => handleTabChange("reviews")}>
        <ListItemIcon>
          <ReviewsIcon />
        </ListItemIcon>
        <ListItemText primary="Reviews & Ratings" />
      </ListItemButton>

      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
}
