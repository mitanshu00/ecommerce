import { useState, useEffect } from "react";
import { Grid, Card, CardContent, CardActions } from "@mui/material";
import AddressList from "./AddressList";
import { useSelector } from "react-redux";
import RButton from "../../../ReusableComponents/Button";
import Input from "../../../ReusableComponents/Input";

const apiUrl = process.env.REACT_APP_API_URL;

function Addresses() {
  const userDetails = useSelector((state) => state.auth.user);

  const userId = userDetails.user.id;
  const token = userDetails.token;

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
    fetch(`${apiUrl}/user_addresses/${optionId || ""}`, {
      method: optionId ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newAddress),
    })
      .then((res) => res.json())
      .then((data) => {
        !optionId
          ? setAddresses([...addresses, data])
          : setAddresses(
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
      {addresses.length === 0 ? (
        <p>No address available.</p>
      ) : (
        <AddressList addresses={addresses} editAddress={editAddress} />
      )}
      <Grid item md={6}>
        {open ? (
          <Card>
            <form onSubmit={handleFormSubmit}>
              <CardContent>
                <Grid item container spacing={1} justify="center">
                  <Grid item xs={12} sm={6} md={12}>
                    <Input
                      label="Full name"
                      variant="outlined"
                      fullWidth
                      required
                      name="fullname"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Input
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
                    <Input
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
                    <Input
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
                    <Input
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
                    <Input
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
                    <Input
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
                <RButton variant="contained" color="success" type="Submit">
                  SAVE
                </RButton>
                <RButton variant="outlined" color="error" onClick={closeForm}>
                  CANCEL
                </RButton>
              </CardActions>
            </form>
          </Card>
        ) : (
          <RButton
            variant="contained"
            onClick={() => {
              setOpen(true);
              setOptionId(0);
            }}
          >
            ADD NEW ADDRESS
          </RButton>
        )}
      </Grid>
    </Grid>
  );
}

export default Addresses;
