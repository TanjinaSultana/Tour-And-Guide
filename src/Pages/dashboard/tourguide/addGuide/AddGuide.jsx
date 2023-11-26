import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Typography, Paper, Grid,  } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddGuide = () => {
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
            name: data.name,
            contact: data.contact,
            skills: data.skills,
            workExperience: data.workExperience,
           
            education:data.education,
            image:res.data.data.display_url,
            email:data.email
         }
         console.log(tourItem);
         try{
  
           const guideRes = await axiosSecure.post('/guide',tourItem)
           
           if(guideRes.data.insertedId){
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
              <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50, borderRadius: 5 }}>
        <Typography variant="h5">Your Form</Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', marginTop: 20 }}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              {/* Your Image Input */}
              <TextField {...register('name', { required: 'name is required' })} 
              label="Name" variant="outlined" name='name' fullWidth
               />
           
            </Grid>
          <Grid item xs={12}>
              {/* Your Image Input */}
              <TextField {...register('email', { required: 'email is required' })} label="Email" variant="outlined"
               fullWidth
              
               />
            </Grid>
            <Grid item xs={12}>
              <TextField {...register('contact', { required: 'contact is required' })} label="Contact" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              {/* Your Image Input */}
              {/* <TextField {...register('image', { required: 'Image is required' })} label="Image" variant="outlined" fullWidth /> */}
              <input {...register('image', { required: 'Image is required' })} type="file" className="file-input w-full max-w-xs" />
            </Grid>
           
           
            <Grid item xs={12}>
              <TextField {...register('education', { required: 'Education is required' })} label="Education" variant="outlined" fullWidth />
              {/* <input {...register('gallery3', { required: 'Gallery 3 is required' })} type="file" className="file-input w-full max-w-xs" /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField {...register('skills', { required: 'Skills is required' })} label="Skills" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField {...register('workExperience', { required: 'WorkExperience is required' })} label="WorkExperience" variant="outlined" fullWidth />
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

export default AddGuide;