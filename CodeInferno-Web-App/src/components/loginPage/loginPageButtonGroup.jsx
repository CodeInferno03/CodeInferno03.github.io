// import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const LoginPageButtonGroup = () => {
  const navigate = useNavigate();

  const gotoSignupPage = () => { navigate('/signup'); }
  const gotoHomePage = () => { navigate('/home'); }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          marginLeft: 2,
          marginRight: 2,
          marginTop: 1,
          marginBottom: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button onClick={gotoSignupPage}>Sign Up</Button>
        <Button onClick={gotoHomePage}>Home Page</Button>
      </ButtonGroup>
    </Box>
  );
}

export default LoginPageButtonGroup;