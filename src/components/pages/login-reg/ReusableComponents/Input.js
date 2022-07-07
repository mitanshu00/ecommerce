import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const Input = ({ id, name, label, type }) => (
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

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  id: "id",
  name: "name",
  label: "label",
  type: "type",
};

export default Input;
