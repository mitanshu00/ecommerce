import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Card, Box, Alert, Typography } from "@mui/material";
import { sendRegisterData } from "../../../store/action/register-actions";
import { Link } from "react-router-dom";
import Input from "./ReusableComponents/Input";
import RButton from "./ReusableComponents/Button";
import shopCart from "../../../assets/undraw_shopping_app_flsj.png";

const Register2 = () => {
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
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(
      sendRegisterData({
        enteredName: actualData.name,
        enteredPhone: actualData.phone,
        enteredRegEmail: actualData.email,
        enteredRegPassword: actualData.password,
      })
    );
    if (
      actualData.name &&
      actualData.email &&
      actualData.password &&
      actualData.phone
    ) {
      if (
        actualData.password.length > 6 &&
        actualData.phone.length === 10 &&
        actualData.email.includes("@")
      ) {
        console.log(actualData);
        document.getElementById("registration-form").reset();
        setError({
          status: true,
          msg: "Registration Successful",
          type: "success",
        });
      } else {
        setError({
          status: true,
          msg: "Please enter valid information!",
          type: "error",
        });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };
  return (
    <Grid container sx={{ height: "90vh", width: "100%" }}>
      <Grid
        item
        lg={7}
        sm={5}
        sx={{
          backgroundImage: `url(${shopCart})`,
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
              id="registration-form"
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
                <Typography variant="h5">REGISTER USER</Typography>
              </Box>
              <Input id="name" name="name" label="Name" type="text" />
              <Input id="phone" name="phone" label="Phone No." type="number" />
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

              <Box textAlign="center">
                <RButton
                  type="submit"
                  sx={{ mt: 3, mb: 2, px: 5, bgcolor: "#2e3b55" }}
                >
                  Submit
                </RButton>
              </Box>
              {error.status ? (
                <Alert
                  severity={error.type}
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
            <Link to="/login" style={{ color: "#000" }}>
              Existing User ? Sign in
            </Link>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Register2;
