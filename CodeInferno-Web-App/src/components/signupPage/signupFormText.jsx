// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SignUpText() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { 
          marginTop: 2, 
          marginRight: 1, 
          marginLeft: 1,
          marginBottom: 0.7,
          fontFamily: 'inherit'
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{fontFamily: 'Fira Sans, Arial, Monospace'}}>
        <TextField
          required
          id="nameField"
          label="First Name"
          //defaultValue="Hello World"
          sx = {{
            width: '35ch'
          }}
        />
        <TextField 
          id="nameField"
          label="Last Name"
          sx = {{
            width: '35ch'
          }}
        />
        <TextField
          required
          id="emailId"
          label="Email Id"
          // defaultValue="example@gmail.com"
          sx={{
            width: '72ch'
          }}
        />
        <TextField
          required
          id="passwordInput"
          label="Password"
          type="password"
          // autoComplete="current-password"
          sx={{
            width: '72ch'
          }}
        />
        <TextField
          required
          id="passwordConfirm"
          label="Confirm Password"
          type='password'
          sx={{
            width: '72ch'
          }}
        />
      </div>
    </Box>
  );
}
