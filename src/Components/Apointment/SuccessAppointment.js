import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Appointment successfully </Typography>
      <Link to="/appointments">View Appointment</Link>
    </div>
  );
};

export default Success;