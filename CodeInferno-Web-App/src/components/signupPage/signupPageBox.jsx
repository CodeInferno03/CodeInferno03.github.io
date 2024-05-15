import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import SignUpText from './signupFormText';
import SignUpPageButtonGroup from './signupPageButtonGroup';


export default function SignUpBox() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        
        '& > :not(style)': {
          m: "6%",
          width: 650,
          height: 450,
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
          <h1 style={{
            margin: '20px', 
            fontFamily: 'Fira-Sans, Arial, Monospace'
          }}>Sign Up Information</h1>
          <SignUpText />
          <SignUpPageButtonGroup />
        </Paper>
    </Box>
  );
}
