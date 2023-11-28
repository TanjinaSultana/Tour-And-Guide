import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import toast from 'react-hot-toast';

const Login = () => {
  const {signIn,user} = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"
   const handleSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(res=>{
      Swal.fire(`${user?.displayName} is logged in succesfully`);
      navigate(from,{replace:true})
    })
.catch(err => toast.error("this didnt match",err.message))
   }

    return (
        <div >
             <Container component="main" maxWidth="xs">
      <div style={{border:"2px solid #6a2f41",marginTop:"150px", padding:"40px",borderRadius:"5px"}}>
        <Typography variant="h5" align="center" gutterBottom style={{fontWeight:"bold"}}>
          Login
        </Typography>
        <form onSubmit={handleSubmit} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2,backgroundColor:"#6a2f41" }}
          >
            Login
          </Button>
        </form>
        <p><small  style={{fontSize:"14px",fontWeight:"normal"}}>New Here? <Link to="/register">Create an account</Link> </small></p>
      <SocialLogin></SocialLogin>
      </div>
    </Container>
        </div>
    );
};

export default Login;