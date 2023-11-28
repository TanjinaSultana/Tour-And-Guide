import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Typography, Paper, Grid,  } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItem = () => {
    const {user} =useAuth()
    const { handleSubmit, reset,register} = useForm();
    const axiosPublic = useAxiosPublic()
    const [axiosSecure] = useAxiosSecure()

    const onSubmit = async(data) => {
      const imageFile = {image: data.image[0]}
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
              'content-type': 'multipart/form-data'
          }
      });
      if(res.data.success){

        const tourItem = {
          title: data.title,
          type: data.type,
          price: parseFloat(data.price),
          gallery1: data.gallery1,
          gallery2: data.gallery2,
          gallery3: data.gallery3,
          day1:data.day1,
          day2:data.day2,
          day3:data.day3,
          details:data.details,
          image:res.data.data.display_url,
          email:data.email
       }
       try{

         const pacakageRes = await axiosSecure.post('/packages',tourItem)
         console.log(pacakageRes);
         if(pacakageRes.data.insertedId){
         reset()
         Swal.fire("data added");
         }
        }catch(err){
          console.log(err);

        }
       }
     
    };
    return (
        <div>
             <Container component="main" maxWidth="md" >
      <Paper elevation={3} style={{ padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50, borderRadius: 5 ,border:"2px solid #6a2f41"}}>
        <Typography variant="h5">Your Form</Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', marginTop: 20 }}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              {/* Your Image Input */}
              <TextField {...register('title', { required: 'title is required' })} 
              label="Title" variant="outlined" name='title' fullWidth
               />
           
            </Grid>
          <Grid item xs={12}>
              {/* Your Image Input */}
              <TextField {...register('email', { required: 'email is required' })} label="Email" variant="outlined"
               fullWidth
               value={user?.email || ""}
               />
            </Grid>
            <Grid item xs={12}>
              <TextField {...register('type', { required: 'Type is required' })} label="Type" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              {/* Your Image Input */}
              {/* <TextField {...register('image', { required: 'Image is required' })} label="Image" variant="outlined" fullWidth /> */}
              <input {...register('image', { required: 'Image is required' })} type="file" className="file-input w-full max-w-xs" />
            </Grid>
            <Grid item xs={12}>
              {/* Your Gallery Images Input */}
              <TextField {...register('gallery1', { required: 'Gallery 1 is required' })} label="Gallery 1" variant="outlined" fullWidth />
              {/* <input {...register('gallery1', { required: 'Gallery 1 is required' })} type="file" className="file-input w-full max-w-xs" /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField {...register('gallery2', { required: 'Gallery 2 is required' })} label="Gallery 2" variant="outlined" fullWidth />
              {/* <input {...register('gallery2', { required: 'Gallery 2 is required' })} type="file" className="file-input w-full max-w-xs" /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField {...register('gallery3', { required: 'Gallery 3 is required' })} label="Gallery 3" variant="outlined" fullWidth />
              {/* <input {...register('gallery3', { required: 'Gallery 3 is required' })} type="file" className="file-input w-full max-w-xs" /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField {...register('price', { required: 'Price is required' })} label="Price" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField {...register('day1', { required: 'Day1 is required' })} label="Day1" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField {...register('day2', { required: 'Day2 is required' })} label="Day2" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField {...register('day3', { required: 'Day3 is required' })} label="Day3" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField {...register('details', { required: 'Details are required' })} label="Details" variant="outlined" multiline rows={4} fullWidth />
            </Grid>
            
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20,backgroundColor:"#6a2f41" }}>
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
        </div>
    );
};

export default AddItem;