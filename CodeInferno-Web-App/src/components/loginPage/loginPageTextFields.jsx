
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../index.css'
import { useState } from 'react';


const LoginFields = () => {

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
        '& .MuiTextField-root': { m: 1, width: '61ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="loginEmail"
          label="Email Id"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={!!errorMessage}
          helperText={errorMessage}
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

export default LoginFields;
