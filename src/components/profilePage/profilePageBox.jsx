import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ProfileText from './profilePageFormText';
import ProfilePageButton from './profilePageButton';


export default function ProfilePageBox() {
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
          }}>Profile Information</h1>
          <ProfileText />
          <ProfilePageButton />
        </Paper>
    </Box>
  );
}
