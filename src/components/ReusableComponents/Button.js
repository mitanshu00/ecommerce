import React from "react";
import PropTypes from "prop-types";

import { Button } from "@mui/material";

const RButton = ({ children, type, sx, onClick, variant, color }) => (
  <Button type={type} variant={variant} sx={sx} onClick={onClick} color={color}>
    {children}
  </Button>
);

RButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  sx: PropTypes.object,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  color: PropTypes.string,
};

RButton.defaultProps = {
  variant: "contained",
  color: "primary",
};

export default RButton;
