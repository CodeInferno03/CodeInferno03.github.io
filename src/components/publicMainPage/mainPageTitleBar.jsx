// import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import MainPageAccountButtonGroup from './mainPageButtons';

const MainPageTitleBar = () => {
  const navigate = useNavigate();

  const gotoLoginPage = () => { return navigate('/login') }
  const gotoSignupPage = () => { return navigate('/signup') }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ fontFamily: 'Fira Sans, Arial, monospace' }}>
          <IconButton
            size="large"
            edge="start"
            color="Green"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mock Bank
          </Typography>
          <Button onClick={gotoLoginPage} color='inherit'>Login</Button>
          <Button onClick={gotoSignupPage} color='inherit'>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainPageTitleBar;