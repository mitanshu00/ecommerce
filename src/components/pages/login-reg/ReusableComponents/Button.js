import React from "react";
import { Button } from "@mui/material";

const RButton = ({ children, type, sx, onClick, variant = "contained" }) => {
  return (
    <div>
      <Button type={type} variant={variant} sx={sx} onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};

export default RButton;
