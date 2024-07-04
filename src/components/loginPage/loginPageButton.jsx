// import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';

// https://chatgpt.com/c/c2844f70-3c13-4b75-81e7-4a55fdbdd269
const LoginPageButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // login logic 

    navigate('/dashboard');
  };
  
  
  return (
      <Button 
        onClick={handleLogin}
        variant = "contained"
        style={{
            display: 'flex',
            marginTop: 3,
            marginBottom: 1,
            marginLeft: 2,
            marginRight: 2,
            width: "537px",
            height: "50px",
        }}>Login</Button>
  );
}


export default LoginPageButton;