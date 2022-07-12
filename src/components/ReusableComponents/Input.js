import React from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const Input = ({
  id,
  name,
  label,
  type,
  value,
  disabled,
  variant,
  placeholder,
  multiline,
}) => (
  <TextField
    margin="normal"
    required
    fullWidth
    multiline={multiline}
    disabled={disabled}
    id={id}
    name={name}
    label={label}
    type={type}
    variant={variant}
    value={value}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  id: "id",
  type: "text",
  disabled: false,
  variant: "standard",
  placeholder: "",
  multiline: false,
};

export default Input;
