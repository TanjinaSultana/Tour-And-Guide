// Dashboard.jsx
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { FaHome, FaUsers } from 'react-icons/fa';
import { MdTour } from 'react-icons/md';
import Navbar from '../Pages/Shared/Navbar';
import useAdmin from '../hooks/useAdmin'
import useTourGuide from '../hooks/useTourGuide';

const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const [isTourGuide] = useTourGuide()
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
        {
          isAdmin ? <>
          
        <List>
          <ListItem button component={NavLink} to="/dashboard/home">
            <ListItemIcon>
              <FaHome />
            </ListItemIcon>
            <ListItemText primary="Admin Profile" />
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
          </>:(isTourGuide?
          <> <List>
          <ListItem button component={NavLink} to="/dashboard/guidehome">
            <ListItemIcon>
              <FaHome />
            </ListItemIcon>
            <ListItemText primary="Tour Guide Profile" />
          </ListItem>

          <ListItem button component={NavLink} to="/dashboard/assigntour">
            <ListItemIcon>
              <MdTour />
            </ListItemIcon>
            <ListItemText primary="My Assigned Tours" />
          </ListItem>

         
        </List></>
        :
        <> <List>
        <ListItem button component={NavLink} to="/dashboard/userhome">
          <ListItemIcon>
            <FaHome />
          </ListItemIcon>
          <ListItemText primary="Tourist Profile" />
        </ListItem>

        <ListItem button component={NavLink} to="/dashboard/cart">
          <ListItemIcon>
            <MdTour />
          </ListItemIcon>
          <ListItemText primary="My Booking" />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/wish">
          <ListItemIcon>
            <MdTour />
          </ListItemIcon>
          <ListItemText primary="My Wishlist" />
        </ListItem>

       
      </List></>
          )
        }
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
