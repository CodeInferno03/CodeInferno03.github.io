import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const MainPageButtons = () => {
    // button css values
    const buttonCssVals = {
        'widthVal': '600px',
        'buttonHeight': '60px',
        'marginVal': '7px'
    };

    const navigate = useNavigate();

    const gotoLoginPage = () => { navigate('/login'); };
    const gotoSignupPage = () => { navigate('/signup'); };

    return (
        <Box
            sx={{
                width: buttonCssVals.widthVal,
                height: '150px'
            }}>
            <Button
            variant='contained'
            style={{
                width: buttonCssVals.widthVal,
                height: buttonCssVals.buttonHeight,
                marginTop: buttonCssVals.marginVal,
                marginBottom: buttonCssVals.marginVal
            }}
            onClick={gotoLoginPage}>
                LOGIN
            </Button>
            
            <Button
            variant='contained'
            style={{
                width: buttonCssVals.widthVal,
                height: buttonCssVals.buttonHeight,
                marginTop: buttonCssVals.marginVal,
                marginBottom: buttonCssVals.marginVal
            }}
            onClick={gotoSignupPage}>
                SIGN UP
            </Button>
        </Box>
    );
}

export default MainPageButtons;