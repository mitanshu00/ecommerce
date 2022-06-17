import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProfileAction from "./ProfileAction";
import Addresses from "./profile-tabs/Addresses";
import Order from "./profile-tabs/Order";
import Info from "./profile-tabs/Info";

function Products() {
  const [selectedTab, setSelectedTab] = useState("info");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5} sm={3} columns={{ xs: 1 }}>
          <ProfileAction selecteTab={setSelectedTab} />
        </Grid>
        <Grid item xs={7} sm={9} columns={{ xs: 1 }}>
          {selectedTab === "info" && <Info />}
          {selectedTab === "addr" && <Addresses />}
          {selectedTab === "completed" && <Order status="completed" />}
          {selectedTab === "pending" && <Order status="pending" />}
          {selectedTab === "cancelled" && <Order status="cancelled" />}
          {selectedTab === "returned" && <Order status="returned" />}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Products;
