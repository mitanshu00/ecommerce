import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { List, ListItem, ListItemText, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const apiUrl = process.env.REACT_APP_API_URL;

function Order({ status }) {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const userDetails = useSelector((state) => state.auth.user);

  const token = userDetails.token;

  // let userId = 10;
  // ?user_id=${userId}
  useEffect(() => {
    fetch(`${apiUrl}/orders/`, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [token]);

  useEffect(() => {
    if (orders.length > 0) {
      const newList = orders.filter((item) => item.status === status);
      setFilteredOrders(newList);
    }
  }, [orders, status]);

  const addReview = (product_id) => {
    console.log(product_id);
  };

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
            key={order.id}
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
                  order.orders.map((item, index) => (
                    <ListItemText primary={item} secondary="" key={index} />
                  ))}
              </Grid>
              <Grid item xs={8}>
                {order.order_items?.length > 0 &&
                  order.order_items.map((item, index) => (
                    <>
                      <Button
                        variant="contained"
                        onClick={() => addReview(item.product_id)}
                      >
                        Add Review
                      </Button>
                      <Link to={`/product/${item.product_id}`} key={index}>
                        <ListItemText primary="view" />
                      </Link>
                    </>
                  ))}
              </Grid>
            </Grid>
          </List>
        ))}
    </>
  );
}

Order.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Order;
