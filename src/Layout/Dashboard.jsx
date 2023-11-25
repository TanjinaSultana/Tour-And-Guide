// Dashboard.jsx
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { FaHome, FaUsers } from 'react-icons/fa';
import { MdTour } from 'react-icons/md';
import Navbar from '../Pages/Shared/Navbar';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
<Navbar position="fixed">
<Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
</Navbar>
      {/* App Bar */}
      {/* < position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar> */}

      {/* Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button component={NavLink} to="/dashboard/home">
            <ListItemIcon>
              <FaHome />
            </ListItemIcon>
            <ListItemText primary="Admin Home" />
          </ListItem>

          <ListItem button component={NavLink} to="/dashboard/addItem">
            <ListItemIcon>
              <MdTour />
            </ListItemIcon>
            <ListItemText primary="Add A Package" />
          </ListItem>

          <ListItem button component={NavLink} to="/dashboard/alluser">
            <ListItemIcon>
              <FaUsers />
            </ListItemIcon>
            <ListItemText primary="All Users" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <main style={{flexGrow:"1",padding:"3px"}}>
        <Toolbar />
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
