// import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SavingsIcon from '@mui/icons-material/Savings';

import { useNavigate } from 'react-router-dom'

const DashBoardDrawer = () => {
  const drawerWidth = 240;
  const navigate = useNavigate();

  const iconPicker = {
    'Profile': <AccountBoxIcon />,
    'Make New Account': <SavingsIcon />
  }
  
  // function to allow the elements in the drawer to navigate when clicked
  const clickNav = (val) => {

    const valObj = {
      'Profile': '/profile',
      'Make New Account': '/create'
    }

    navigate(valObj[val]); 
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {/* Maps the values in the drawer to their respective icons, as well as displaying them*/}
            {['Profile', 'Make New Account'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => clickNav(text)}>
                  <ListItemIcon>
                    {iconPicker[text]}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

    </Box>
  );
}

export default DashBoardDrawer;