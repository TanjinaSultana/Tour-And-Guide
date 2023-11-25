import React, { useContext } from 'react';
import { TextField, Button, Container, Typography, Paper, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Register = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const { createUser,updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic()
  const onSubmit = data => {
    console.log(data);

    // Modify the createUser function call to include name and photo
    createUser(data.email, data.password)
      .then(res => {
        const logUser = res.user;
        console.log(logUser);
        updateUserProfile(data.name,data.photo)
        .then(()=>{
            const userInfo ={
            name: data.name,
            email : data.email
            }
            axiosPublic.post('/user',userInfo)
            .then(res=>{
              if(res.data.insertedId){
                reset();
                Swal.fire("Registration Sucessfully");
                
              }
            })
           
        }).catch(err =>{
          console.log(err);
        });
        console.log(logUser);
      })
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', border: "2px solid #6a2f41", marginTop: "150px", borderRadius: "5px" }}>
          <Typography variant="h5">Register</Typography>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', marginTop: 20 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  {...register("name", { required: true })}
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  error={Boolean(errors.name)}
                  helperText={errors.name && "Name is required"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("photo", { required: true })}
                  variant="outlined"
                  required
                  fullWidth
                  id="photo"
                  label="Photo"
                  name="photo"
                  error={Boolean(errors.photo)}
                  helperText={errors.photo && "Photo is required"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("email", { required: true })}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  error={Boolean(errors.email)}
                  helperText={errors.email && "Email is required"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  {...register("password", { required: true })}
                  error={Boolean(errors.password)}
                  helperText={errors.password && "Password is required"}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20, backgroundColor: "#6a2f41" }}>
              Register
            </Button>
          </form>
          <p><small style={{fontSize:"14px",fontWeight:"normal"}}>Already have an account <Link to="/login">Login</Link></small></p>
          <SocialLogin></SocialLogin>
        </Paper>
      </Container>
    </div>
  );
};

export default Register;
