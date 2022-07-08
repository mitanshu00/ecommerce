import React from "react";
import PropTypes from "prop-types";

import { Button } from "@mui/material";

const RButton = ({ children, type, sx, onClick, variant }) => (
  <div>
    <Button type={type} variant={variant} sx={sx} onClick={onClick}>
      {children}
    </Button>
  </div>
);

RButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  sx: PropTypes.object,
  onClick: PropTypes.func,
  variant: PropTypes.string,
};

RButton.defaultProps = {
  type: "",
  sx: {},
  onClick: () => {},
  variant: "contained",
};

export default RButton;
