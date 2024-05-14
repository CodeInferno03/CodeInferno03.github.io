// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
          // required
          id="outlined-required"
          label="User Name"
          // defaultValue="Hello World"
        />

        <TextField
          id="outlined-required"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        {/* <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        /> */}
      </div> 
    </Box>
  );
}

{/* <TextField
disabled
id="outlined-disabled"
label="Disabled"
defaultValue="Hello World"
/> */}