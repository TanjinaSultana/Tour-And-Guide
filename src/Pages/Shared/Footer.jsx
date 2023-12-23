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
    <>
    <footer style={{ background: 'linear-gradient(to top, #202122, #6a2f41)'}} className="text-[#FFFFFF] footer p-24 h-72 bg-base-200 text-base-content mt-24">
  <aside>
  <h1 style={{fontSize:"40px",color:"#FFFFFF" ,marginRight:"40px"}}>Tour<span style={{fontSize:"50px",color:"#FFFFFF",fontStyle:"italic"}}>G</span>uide</h1>
   
  </aside> 
  <nav>
    <header className="footer-title text-[#FFFFFF] ">Services</header> 
    <NavLink to="/"  >
    <li style={{color:"#FFFFFF",listStyle:"none"}}>Home</li>
    </NavLink> 
   <NavLink to="/community"  >
    <li style={{color:"#FFFFFF",listStyle:"none"}}><a>Community</a></li>
    </NavLink> 
   <NavLink to="/blog" >
    <li style={{color:"#FFFFFF",listStyle:"none"}}><a>Blogs</a></li>
    </NavLink> 
   
  </nav> 
  <nav>
    <header className="footer-title text-[#FFFFFF]">Company</header> 
    <NavLink to="/about">
    <li style={{color:"#FFFFFF",listStyle:"none"}}><a>About Us</a></li>
    </NavLink> 
   <NavLink to="/contact">
    <li style={{color:"#FFFFFF",listStyle:"none"}}><a>Contact Us</a></li>
    </NavLink> 
  </nav> 
  <nav>
    <header className="footer-title text-[#FFFFFF]">Legal</header> 
    <a className="link link-hover text-[#FFFFFF]">Terms of use</a>
    <a className="link link-hover text-[#FFFFFF]">Privacy policy</a>
    <a className="link link-hover text-[#FFFFFF]">Cookie policy</a>
  </nav>
</footer>
    
    </>
  );
};

export default Footer;
