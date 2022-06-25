import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./index.css";

const Select = ({ id, label, name, helperText = "", value, onChange, options }) => {
  return (
    <div>
      <TextField
        id={id}
        select
        label={label}
        value={value}
        name={name}
        onChange={onChange}
        helperText={helperText}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};
export default Select;
