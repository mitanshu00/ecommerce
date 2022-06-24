import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  CardActions,
  Button,
} from "@mui/material";
import AddressList from "./AddressList";
import { useSelector } from "react-redux";

let apiUrl = process.env.REACT_APP_API_URL;

function Addresses() {
  let userDetails = useSelector((state) => state.auth.user);

  let userId = userDetails.user.id;
  let token = userDetails.token;

  const [addresses, setAddresses] = useState([{}]);
  const [open, setOpen] = useState(false);
  const [optionId, setOptionId] = useState(0);
  const [newAddress, setNewAddress] = useState({
    address_line1: "",
    address_line2: "",
    city: "",
    country: "",
    postal_code: "",
    mobile_no: "",
    user_id: userId,
  });

  useEffect(() => {
    fetch(`${apiUrl}/user_addresses/`, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setAddresses(data);
      });
  }, [token]);

  const handleChangeForm = (e) => {
    setNewAddress({
      ...newAddress,
      [e.target.name]: e.target.value,
    });
  };

  const closeForm = () => {
    setOpen(false);
    setNewAddress({
      address_line1: "",
      address_line2: "",
      city: "",
      country: "",
      postal_code: "",
      mobile_no: "",
      user_id: userId,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`${apiUrl}/user_addresses/${optionId ? optionId : ""}`, {
      method: optionId ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newAddress),
    })
      .then((res) => res.json())
      .then((data) => {
        !optionId && setAddresses([...addresses, data]);
        optionId &&
          setAddresses(
            addresses.map((address) => {
              if (address.id === optionId) {
                return data;
              }
              return address;
            })
          );
        setNewAddress({
          address_line1: "",
          address_line2: "",
          city: "",
          country: "",
          postal_code: "",
          mobile_no: "",
          user_id: userId,
        });
        setOpen(false);
      });
  };

  const editAddress = (id) => {
    setNewAddress(addresses.find((address) => address.id === id));
    setOptionId(id);
    setOpen(true);
  };

  return (
    <Grid container justify="center" spacing={1}>
      {addresses.length === 0 && <p>No address available.</p>}
      {addresses.length > 0 && (
        <AddressList addresses={addresses} editAddress={editAddress} />
      )}
      <Grid item md={6}>
        {!open && (
          <Button
            variant="contained"
            onClick={() => {
              setOpen(true);
              setOptionId(0);
            }}
          >
            ADD NEW ADDRESS
          </Button>
        )}
        {open && (
          <Card>
            <form onSubmit={handleFormSubmit}>
              <CardContent>
                <Grid item container spacing={1} justify="center">
                  <Grid item xs={12} sm={6} md={12}>
                    <TextField
                      label="Full name"
                      variant="outlined"
                      fullWidth
                      required
                      name="fullname"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Address line 1"
                      variant="outlined"
                      fullWidth
                      required
                      name="address_line1"
                      value={newAddress.address_line1}
                      onChange={(e) => handleChangeForm(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Address line 2"
                      variant="outlined"
                      fullWidth
                      required
                      name="address_line2"
                      value={newAddress.address_line2}
                      onChange={(e) => handleChangeForm(e)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="City"
                      variant="outlined"
                      fullWidth
                      required
                      name="city"
                      value={newAddress.city}
                      onChange={(e) => handleChangeForm(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Country"
                      variant="outlined"
                      fullWidth
                      required
                      name="country"
                      value={newAddress.country}
                      onChange={(e) => handleChangeForm(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Pincode"
                      variant="outlined"
                      fullWidth
                      required
                      name="postal_code"
                      value={newAddress.postal_code}
                      onChange={(e) => handleChangeForm(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Mobile no"
                      variant="outlined"
                      fullWidth
                      required
                      name="mobile_no"
                      value={newAddress.mobile_no}
                      onChange={(e) => handleChangeForm(e)}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="success" type="Submit">
                  SAVE
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  type="button"
                  onClick={closeForm}
                >
                  CANCEL
                </Button>
              </CardActions>
            </form>
          </Card>
        )}
      </Grid>
    </Grid>
  );
}

export default Addresses;
