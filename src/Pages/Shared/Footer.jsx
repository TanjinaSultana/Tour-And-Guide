import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink } from 'react-router-dom';
<style>
{`
  @media only screen and (min-width: 425px) {
    footer {
      margin:0 20 20 0
    }
  }

  @media only screen and (min-width: 768px) {
    footer {
     margin:0 20 20 0
    }
  }
`}
</style>
const Footer = () => {
  return (
    <footer  style={{ background: 'linear-gradient(to top, #202122, #6a2f41)', height:"50vh",marginTop:"50px",borderRadius:"4px" }}>
      <Container  maxWidth="lg" >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
          <h1 style={{fontSize:"40px",color:"#202122" ,marginRight:"40px"}}>Tour<span style={{fontSize:"50px",color:"#FFFFFF"}}>G</span>uide</h1>
            {/* <img src="logo.png" alt="Logo" style={{ maxWidth: '100%' }} /> */}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">
              <Link href="mailto:info@example.com" style={{ color: '#ffffff' }}>
                <IconButton>
                  <EmailIcon />
                </IconButton>
                info@example.com
              </Link>
            </Typography>
            <br />
            <Link href="tel:+123456789" style={{ color: '#ffffff' }}>
              <IconButton>
                <PhoneIcon />
              </IconButton>
              +123 456 789
            </Link>
            <br />
            <Typography style={{ color: '#ffffff' }}>
              <IconButton>
                <LocationOnIcon />
              </IconButton>
              123 Main St, Cityville, Country
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <NavLink to="/about">
            <Typography variant="h6" style={{ color: '#ffffff' ,fontSize:"16px"}}>About Us</Typography>
            </NavLink>
            <NavLink to="/blog">
            <Typography variant="h6" style={{ color: '#ffffff',fontSize:"16px" }}>Blogs</Typography>
            </NavLink>
            <NavLink to="/community">
            <Typography variant="h6" style={{ color: '#ffffff',fontSize:"16px" }}>Community</Typography>
            </NavLink>
            <NavLink to="/contact">
            <Typography variant="h6" style={{ color: '#ffffff',fontSize:"16px" }}>contact Us</Typography>
            </NavLink>
            {/* <Typography style={{ color: '#ffffff' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography> */}
          </Grid>
        </Grid>
        <hr style={{marginTop:"20px"}}></hr>
        <Typography variant="body2" style={{ color: '#ffffff' ,marginTop:"30px" }} align="center">
          © {new Date().getFullYear()} Tour Guide
        </Typography>
      </Container>
     
    </footer>
  );
};

export default Footer;
