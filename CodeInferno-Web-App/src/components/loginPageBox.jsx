// import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LoginFields from './loginPageTextFields';

export default function LoginBox() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        //alignItems: 'center',
        
        '& > :not(style)': {
          m: 1,
          width: 600,
          height: 300,
        },
      }}
    >
      <Paper elevation={3}>
        <LoginFields />
      </Paper>
    </Box>
  );
}
