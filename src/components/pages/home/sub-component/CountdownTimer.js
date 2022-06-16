import React from "react";
import Countdown from "react-countdown";
import { Box } from "@mui/material/";

const renderer = ({ hours, minutes, seconds }) => {
  return (
    <span
      sx={{
        color: "#7f7f7f",
        marginLeft: 10,
        display: "flex",
        alignItems: "center",
      }}
    >
      {hours} : {minutes} : {seconds} Left
    </span>
  );
};

const timerURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

function CountdownTimer() {
  return (
    <Box
      sx={{
        color: "#7f7f7f",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={timerURL} style={{ width: 24 }} alt="time clock" />
      <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
    </Box>
  );
}

export default CountdownTimer;
