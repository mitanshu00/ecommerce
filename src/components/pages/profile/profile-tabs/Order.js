import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { List, ListItem, ListItemText, Grid } from "@mui/material";
import { Link } from "react-router-dom";

let apiUrl = process.env.REACT_APP_API_URL;

function Order({ status }) {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  let userId = useSelector((state) => state.auth.user.user.id);
  // let userId = 10;
  // ?user_id=${userId}
  useEffect(() => {
    fetch(`${apiUrl}/orders/?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [userId]);

  useEffect(() => {
    if (orders.length > 0) {
      let newList = orders.filter((item) => item.status === status);
      setFilteredOrders(newList);
    }
  }, [orders, status]);

  return (
    <>
      {filteredOrders.length === 0 && <p>no {status} orders exists.</p>}
      {filteredOrders.length > 0 &&
        filteredOrders.map((order) => (
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              boxShadow: 2,
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={order.id}
                secondary={order.created_at.slice(0, 10)}
              />
              <ListItemText primary="Status" secondary={order.status} />
            </ListItem>

            <Grid container spacing={2} columns={16} sx={{ pl: 4 }}>
              <Grid item xs={8}>
                {order.orders?.length > 0 &&
                  order.orders.map((item) => (
                    <ListItemText primary={item} secondary="" />
                  ))}
              </Grid>
              <Grid item xs={8}>
                {order.order_items?.length > 0 &&
                  order.order_items.map((item) => (
                    <Link to={`/product/${item.product_id}`}>
                      <ListItemText primary="view" />
                    </Link>
                  ))}
              </Grid>
            </Grid>
          </List>
        ))}
    </>
  );
}

export default Order;
