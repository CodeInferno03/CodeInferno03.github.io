// import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function LoginPageButtonGroup() {
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
        <Button>Sign Up</Button>
        <Button>Home Page</Button>
      </ButtonGroup>
    </Box>
  );
}