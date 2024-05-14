import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import SignUpText from './signupFormText';


export default function SignUpBox() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        //alignItems: 'center',
        
        '& > :not(style)': {
          m: "5%",
          width: 650,
          height: 500,
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
          // justifyContent: 'center',
          // minHeight: "100vh",
         }}>
          <h1 style={{
            margin: '20px', 
            fontFamily: 'Fira-Sans, Arial, Monospace'
          }}>Sign Up Information</h1>
          <SignUpText />
        </Paper>
    </Box>
  );
}
