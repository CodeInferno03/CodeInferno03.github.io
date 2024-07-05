// import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const SignUpPageButtonGroup = () => {
  const navigate = useNavigate();

  const gotoLoginPage = () => { navigate('/login'); }
  const gotoPublicMainPage = () => { navigate('/'); }


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
          fontFamily: 'Fira Sans, Arial, Monospace'
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button onClick={gotoLoginPage}>Login</Button>
        <Button onClick={gotoPublicMainPage}>Home Page</Button>
      </ButtonGroup>
    </Box>
  );
}

export default SignUpPageButtonGroup;