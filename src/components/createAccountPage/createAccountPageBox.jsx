import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CreateAccountPageTextFields from './createAccountPageTextFields';
import CreateAccountPageToggleButtons from './createAccountPageToggleButtons';
import { useBoxCSS } from './boxProps';


const CreateAccountPageBox = () => {
	const boxCSS = useBoxCSS();

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
        <Paper
         elevation={3}
         sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
					width: boxCSS.width,
          height: boxCSS.height,
          fontFamily: boxCSS.fontFamily,
					m: '6%'
         }}>
          <h1 style={{
            margin: '20px', 
          }}>Account Information</h1>
          <CreateAccountPageTextFields/>
          <CreateAccountPageToggleButtons />
        </Paper>
    </Box>
  );
}

export default CreateAccountPageBox;
