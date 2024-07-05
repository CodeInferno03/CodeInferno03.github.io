// import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MainPageButtons from './mainPageButtons';


const MainPageBox = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > :not(style)': {
          m: "10%",
          width: 620,
          height: 270,
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
        <MainPageButtons />
      </Paper>
    </Box>
  );
}

export default MainPageBox;
