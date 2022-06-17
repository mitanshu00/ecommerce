import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

function Order({ status }) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="img"
            variant="square"
            src="https://media.istockphoto.com/photos/round-podium-with-pink-and-green-lights-background-picture-id1314248856?b=1&k=20&m=1314248856&s=612x612&w=0&h=A0XU6Q1-cUajWLt-o3W-QsOJEv4vH6leEPEy44C0iuo="
          />
        </ListItemAvatar>
        <ListItemText
          primary="Order #12345"
          secondary="Placed on March 21, 2019"
        />
        <ListItemText primary="Status" secondary={status} />
      </ListItem>
    </List>
  );
}

export default Order;
