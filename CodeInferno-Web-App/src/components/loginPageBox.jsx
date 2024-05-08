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
      <Paper 
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <div>
          <h1 style={{margin: '20px', fontFamily: 'Comic Sans, Arial, Monospace'}}>Mock Bank</h1>
        </div>
        <LoginFields />
      </Paper>
    </Box>
  );
}
