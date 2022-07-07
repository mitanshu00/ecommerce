import React from "react";
import PropTypes from "prop-types";

import { Button } from "@mui/material";

const RButton = ({ children, type, sx, onClick, variant = "contained" }) => (
  <div>
    <Button type={type} variant={variant} sx={sx} onClick={onClick}>
      {children}
    </Button>
  </div>
);

RButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  sx: PropTypes.object,
  onClick: PropTypes.func,
  variant: PropTypes.string,
};

export default RButton;
