// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import MainPageAccountButtonGroup from './mainPageButtons';

export default function MainPageTitleBar() {
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
          <Button color='inherit'>Login</Button>
          <Button color='inherit'>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}