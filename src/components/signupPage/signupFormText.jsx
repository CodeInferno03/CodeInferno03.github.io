// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


const SignUpText = () => {
  // email checking logic: https://chatgpt.com/c/c2844f70-3c13-4b75-81e7-4a55fdbdd269
  // states to check the emails
  // email to store the input from the text field
  // errormessage if wrong input
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // checks if the email fits the format of abc@def.xyz
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // if the email is wrong but then correct, this clears the error message
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  // if the text field loses focus and the email id is not of the correct format, this throws an error 
  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
    }
  };

  return (
    <Box
      component="form"
      sx={{
        margin: 2,
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
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={!!errorMessage}
          helperText={errorMessage}
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

export default SignUpText;