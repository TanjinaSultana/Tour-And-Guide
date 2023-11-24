import React, {  } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(res =>{
            console.log(res.user);
            Swal.fire("Login Succesfully With Google")
        })
    }
    return (
        <div>
             <Button   style={{ backgroundColor: '#6a2f41',color:"#FFFFFF"}}    onClick={handleGoogleLogin} variant="outlined" startIcon={<GoogleIcon />}>
Google
      </Button>
             {/* <Button
      fullWidth
      variant="contained"
      color="primary"
      style={{ backgroundColor: '#6a2f41', marginTop: 20,borderRadius:"100px" }}
      onClick={handleGoogleLogin}
    >
      <Grid container spacing={1} alignItems="center" style={{borderRadius:"50px"}}>
        <Grid item>
          <GoogleIcon style={{ color: '#FFFFFF' }} />
        </Grid>
        <Grid item>
          <Typography style={{ color: '#FFFFFF' }}></Typography>
        </Grid>
      </Grid>
    </Button> */}
        </div>
    );
};

export default SocialLogin;