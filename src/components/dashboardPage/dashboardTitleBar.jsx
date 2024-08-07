// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import DashBoardDrawer from './dashboardDrawer';

const DashBoardTitleBar = () => {
  const navigate = useNavigate();

  const logoutButton = () => { return navigate('/') };

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <AppBar 
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={logoutButton}>Logout</Button>
        </Toolbar>
      </AppBar>
      <DashBoardDrawer />
      
    </Box>
  );
}

export default DashBoardTitleBar;