import React from "react";
import { TextField } from "@mui/material";

const Input = ({ id, name, label, type }) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={id}
      name={name}
      label={label}
      type={type}
      variant="standard"
    />
  );
};

export default Input;
