import { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  CardActions,
  Button,
  Stack,
  Typography,
  Menu,
  IconButton,
  MenuItem,
} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";

/* 
Address


        "address_line1":"abcijdfjgkig",
        "address_line2":"xykzlng",
        "city":"modasa",
        "country":"india",
        "postal_code": "383315",
        "mobile_no": "080008908",
*/

function Addresses() {
  const [addresses, setAddresses] = useState([{}]);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOptionMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id="edit-delete-option"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem>Edit</MenuItem>
      <MenuItem>Delete</MenuItem>
    </Menu>
  );

  return (
    <Grid container justify="center" spacing={1}>
      <Grid item md={6}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={10} sm={11} columns={{ xs: 1 }}>
                <Stack>
                  <Typography>Mitanshu patel</Typography>
                  <Typography>1208, Times square 1, thaltej</Typography>
                  <Typography>Ahmedabad.</Typography>
                  <Typography>India, 392444</Typography>
                  <Typography>993292839283</Typography>
                </Stack>
              </Grid>
              <Grid item xs={2} sm={1} columns={{ xs: 1 }}>
                <IconButton
                  size="large"
                  aria-label="address options"
                  aria-controls="edit-delete-option"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={handleOptionMenuOpen}
                >
                  <MoreIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
          {renderMenu}
        </Card>
      </Grid>
      <Grid item md={6}>
        {!open && (
          <Button variant="contained" onClick={() => setOpen(true)}>
            ADD NEW ADDRESS
          </Button>
        )}
        {open && (
          <Card>
            <form>
              <CardContent>
                <Grid item container spacing={1} justify="center">
                  <Grid item xs={12} sm={6} md={12}>
                    <TextField
                      label="Full name"
                      variant="outlined"
                      fullWidth
                      name="country"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Address line 1"
                      variant="outlined"
                      fullWidth
                      name="firstName"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Address line 2"
                      variant="outlined"
                      fullWidth
                      name="lastName"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="City"
                      variant="outlined"
                      fullWidth
                      name="city"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Country"
                      variant="outlined"
                      fullWidth
                      name="country"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Pincode"
                      variant="outlined"
                      fullWidth
                      name="email"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Mobile no"
                      variant="outlined"
                      fullWidth
                      name="password"
                      type="password"
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="success" type="Submit">
                  SAVE
                </Button>
                <Button variant="outlined" color="error" type="Submit">
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
