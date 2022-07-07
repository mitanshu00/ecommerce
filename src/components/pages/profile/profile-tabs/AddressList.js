import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PropTypes from "prop-types";

function AddressList({ addresses, editAddress }) {
  return (
    <Grid item md={6}>
      {addresses.map((address) => (
        <Card sx={{ mb: 2 }} key={address.id + address.mobile_no}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={10} sm={11} columns={{ xs: 1 }}>
                <Stack>
                  <Typography>fullname</Typography>
                  <Typography>
                    {address.address_line1}, {address.address_line2}
                  </Typography>
                  <Typography>{address.city}.</Typography>
                  <Typography>
                    {address.country}, {address.postal_code}
                  </Typography>
                  <Typography>{address.mobile_no}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={2} sm={1} columns={{ xs: 1 }}>
                <IconButton
                  size="large"
                  onClick={() => editAddress(address.id)}
                >
                  <EditIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}

AddressList.propTypes = {
  addresses: PropTypes.arrayOf(PropTypes.object),
  editAddress: PropTypes.func,
};

export default AddressList;
