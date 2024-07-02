// import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LoginFields from './loginPageTextFields';
import LoginPageButtonGroup from './loginPageButtonGroup';
import LoginPageButton from './loginPageButton';


export default function LoginBox() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > :not(style)': {
          m: "10%",
          width: 560,
          height: 375,
          fontFamily: 'Fira Sans, Arial, Monospace'
        },
      }}
    >
      <Paper 
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white'
        }}>
        <div>
          <h1 style={{
            margin: '20px', 
          }}>Mock Bank</h1>
        </div>
        <LoginFields />
        <LoginPageButton />
        <LoginPageButtonGroup />
      </Paper>
    </Box>
  );
}

