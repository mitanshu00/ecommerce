import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProfileAction from "./ProfileAction";
import Addresses from "./profile-tabs/Addresses";
import Order from "./profile-tabs/Order";
import Info from "./profile-tabs/Info";
import RatingReviews from "./profile-tabs/RatingReviews";

function Products () {
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
          {/* {selectedTab === "all" && <Order status="all" />} */}
          {selectedTab === "completed" && <Order status="created" />}
          {selectedTab === "pending" && <Order status="pending" />}
          {selectedTab === "cancelled" && <Order status="cancelled" />}
          {selectedTab === "returned" && <Order status="returned" />}
          {selectedTab === "reviews" && <RatingReviews />}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Products;
