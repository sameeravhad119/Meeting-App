import React from 'react';
import { TextField } from "@mui/material";
import './index.css';

const InputText = ({ id, label, value, required, onChange}) => {
  return (
    <div className='input-text-container'>
        <TextField
          required={required}
          id={id}
          label={label}
          value={value}
          onChange={onChange}
        />
    </div>
  )
}

export default InputText;