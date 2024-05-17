// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../index.css'

export default function LoginFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '72ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="loginEmail"
          label="Email Id"
          // defaultValue="Hello World"
        />

        <TextField
          required
          id="loginPassword"
          label="Password"
          type="password"
          // autoComplete="current-password"
        />
      </div> 
    </Box>
  );
}
