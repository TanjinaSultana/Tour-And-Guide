import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Typography, Paper, Grid,  } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';
const AddItem = () => {
    const {user} =useAuth()
    const { handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
      console.log(data.title);
    //   const tourItem = {
    //    title: data.title,
    //    type: data.type,
    //    price: parseFloat(data.price),
    //    gallery1: data.gallery1,
    //    gallery2: data.gallery2,
    //    gallery3: data.gallery3,
    //    day1:data.day1,
    //    day2:data.day2,
    //    day3:data.day3,
    //    details:data.details,
    //    image:data.image,
    //    email:data.user?.email
    // }
    // console.log(tourItem);
      // Handle your form submission logic here
    };
    return (
        <div>
             <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50, borderRadius: 5 }}>
        <Typography variant="h5">Your Form</Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', marginTop: 20 }}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              {/* Your Image Input */}
              <TextField {...('title', { required: 'title is required' })} 
              label="Title" variant="outlined" name='title' fullWidth
               />
           
            </Grid>
          <Grid item xs={12}>
              {/* Your Image Input */}
              <TextField {...('email', { required: 'email is required' })} label="Email" variant="outlined"
               fullWidth
               value={user?.email || ""}
               />
            </Grid>
            <Grid item xs={12}>
              <TextField {...('type', { required: 'Type is required' })} label="Type" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              {/* Your Image Input */}
              <TextField {...('image', { required: 'Image is required' })} label="Image" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              {/* Your Gallery Images Input */}
              <TextField {...('gallery1', { required: 'Gallery 1 is required' })} label="Gallery 1" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField {...('gallery2', { required: 'Gallery 2 is required' })} label="Gallery 2" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField {...('gallery3', { required: 'Gallery 3 is required' })} label="Gallery 3" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField {...('price', { required: 'Price is required' })} label="Price" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField {...('day1', { required: 'Day1 is required' })} label="Day1" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField {...('day2', { required: 'Day2 is required' })} label="Day2" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField {...('day3', { required: 'Day3 is required' })} label="Day3" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField {...('details', { required: 'Details are required' })} label="Details" variant="outlined" multiline rows={4} fullWidth />
            </Grid>
            
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20 }}>
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
        </div>
    );
};

export default AddItem;