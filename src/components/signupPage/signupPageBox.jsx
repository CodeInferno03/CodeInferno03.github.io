import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import SignUpText from './signupFormText';
import SignUpPageButtonGroup from './signupPageButtonGroup';
import SignupPageButton from './signupPageButton';


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
          height: 550,
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
          <h1 style={{
            margin: '20px', 
          }}>Sign Up Information</h1>
          <SignUpText />
          <SignupPageButton />
          <SignUpPageButtonGroup />
        </Paper>
    </Box>
  );
}
