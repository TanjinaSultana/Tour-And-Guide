import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';




const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const {user,logOut} = useAuth();
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    const handleLogOut = () =>{
      logOut()
      .then(() =>{})
      .catch(err=>console.log(err))
    }
    
    const navOptions = <>
   <NavLink to="/"  >
    <li style={{color:"#FFFFFF"}}>Home</li>
    </NavLink> 
   <NavLink to="/community"  >
    <li style={{color:"#FFFFFF"}}><a>Community</a></li>
    </NavLink> 
   <NavLink to="/blog" >
    <li style={{color:"#FFFFFF"}}><a>Blogs</a></li>
    </NavLink> 
   <NavLink to="/about">
    <li style={{color:"#FFFFFF"}}><a>About Us</a></li>
    </NavLink> 
   <NavLink to="/contact">
    <li style={{color:"#FFFFFF"}}><a>Contact Us</a></li>
    </NavLink> 
    {/* {
      user?
      <NavLink >
    <li style={{color:"#202122"}}><a><button>Logout</button></a></li>
 
    </NavLink> :""
    } */}
   
</>
    const userOptions = <div style={{width:"150px"}} >
    <h4>{user?.displayName}</h4>
    <h4 style={{marginTop:"-20px",marginBottom:"-2px",width:"100px"}}>{user?.email}</h4>
   <NavLink to="/dashboard">
    <li style={{ padding:"10px",border:"2px solid #6a2f41",borderRadius:"5px",listStyle:"none",paddingLeft:"40px",paddingRight:"40px",color:"#202122",fontSize:"16px",fontWeight:"bold"}}><a>DashBoard</a></li>
    </NavLink> 
   <NavLink to="/offer">
    <li style={{ padding:"10px",border:"2px solid #6a2f41",borderRadius:"5px",listStyle:"none",color:"#202122",fontSize:"16px",fontWeight:"bold",marginTop:"10px"}}><a>Offer Anouncement</a></li>
    </NavLink> 
   <NavLink >
    <li style={{color:"#202122"}}><a><button onClick={handleLogOut} style={{ background: 'linear-gradient(to right, #202122, #6a2f41)',padding:"10px",border:"none",borderRadius:"5px",listStyle:"none",paddingLeft:"40px",paddingRight:"40px",color:"#FFFFFF",fontSize:"16px",fontWeight:"bold",marginTop:"10px"}}>Logout</button></a></li>
 
    </NavLink> 
   
</div>
    return (
        <div >
          <AppBar  position="absolute" sx={{ background:"linear-gradient(to top, #202122, #6a2f41)",position:'absolute',opacity:"10px",zIndex:"40px",boxShadow:"none"}} className='bg-transparent' >
      <Container  >
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'transparent',
              textDecoration: 'none',
            }}
          >
            {/* <img src='logo.png' style={{width:'150px', height:'70px',display:'block'}}></img> */}
            <br></br>
            <h1 style={{fontSize:"40px",color:"#FFFFFF" ,marginRight:"40px"}}>Tour<span style={{fontSize:"50px",color:"#FFFFFF",fontStyle:"italic"}}>G</span>uide</h1>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#202122"
            >
             <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{navOptions}</Typography>
                </MenuItem>
              ))} */}
              
                <MenuItem  onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" >{navOptions}</Typography>
                </MenuItem>
            
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
             
              textDecoration: 'none',
            }}
          >
           <h1 style={{fontSize:"40px",color:"#202122" ,marginRight:"40px"}}>Tour<span style={{fontSize:"50px",color:"#6a2f41"}}>G</span>uide</h1>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex' ,listStyle:'none', justifyContent:"space-between",gap:"20px" }}
              >
                {navOptions}
              </Button>
           </div>
          
          </Box>
{
  user ?
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={user?.photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{userOptions}</Typography>
                </MenuItem>
           
            </Menu>
          </Box> :<NavLink to="/login">
    <button style={{ background: 'linear-gradient(to right, #202122, #6a2f41)',padding:"10px",border:"none",borderRadius:"5px",listStyle:"none",paddingLeft:"40px",paddingRight:"40px",color:"#FFFFFF",fontSize:"16px",fontWeight:"bold"}}>Login</button>
 
    </NavLink> 
}
        </Toolbar>
      </Container>
    </AppBar>
        </div>
    );
};

export default Navbar;