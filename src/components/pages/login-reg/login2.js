import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Card, Box, Alert, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Input from "./ReusableComponents/Input";
import RButton from "./ReusableComponents/Button";
import emptyCart from "../../../assets/undraw_empty_cart_co35.png";
import { sendFormData } from "../../../store/action/form-actions";

function Login2() {
  const IsAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(
      sendFormData({
        enteredEmail: actualData.email,
        enteredPassword: actualData.password,
      })
    );
    if (actualData.email && actualData.password) {
      console.log(actualData);
      if (!IsAuth) {
        setError({
          status: true,
          msg: "Incorrect email or password",
          type: "error",
        });
      } else {
        setError({ status: true, msg: "Login Success", type: "success" });
      }

      document.getElementById("login-form").reset();
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };

  return (
    <Grid container sx={{ height: "90vh" }}>
      <Grid
        item
        lg={7}
        sm={5}
        sx={{
          backgroundImage: `url(${emptyCart})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: { xs: "none", sm: "block" },
        }}
      ></Grid>
      <Grid item lg={5} sm={7} xs={12}>
        <Card sx={{ width: "100%", height: "100%" }}>
          <Box sx={{ mx: 3, height: 530 }}>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              id="login-form"
              onSubmit={handleSubmit}
            >
              <Box
                sx={{
                  my: 2,
                  bgcolor: "#2e3b55",
                  py: 1,
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                <Typography variant="h5">LOGIN</Typography>
              </Box>
              <Input
                id="email"
                name="email"
                label="Email Address"
                type="email"
              />
              <Input
                id="password"
                name="password"
                label="Password"
                type="password"
              />
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                variant="standard"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
              /> */}
              <Box textAlign="center">
                <RButton
                  type="submit"
                  sx={{ mt: 3, mb: 2, px: 5, bgcolor: "#2e3b55" }}
                >
                  Login
                </RButton>
              </Box>

              {error.status ? (
                <Alert
                  severity={error.type}
                  sx={{ mt: 3 }}
                  onClose={() => {
                    setError({ status: false });
                  }}
                >
                  {error.msg}
                </Alert>
              ) : (
                ""
              )}
            </Box>
          </Box>
          <Box textAlign="center">
            <Link to="/register" style={{ color: "#000" }}>
              New User? register
            </Link>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Login2;
