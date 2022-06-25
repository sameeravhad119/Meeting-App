import { TextField } from "@mui/material";
import React from "react";
import "./index.css";

const DateTimePicker = ({ id, type, label, value, defaultValue, ...otherProps }) => {
  return (
    <div className="date-picker-container">
      <TextField
        id={id}
        label={label}
        type={type}
        value={value}
        defaultValue={defaultValue}
        {...otherProps}
      />
    </div>
  );
};
export default DateTimePicker;
