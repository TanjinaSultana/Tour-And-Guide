/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Typography, Paper, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from '../../../../../../hooks/useAuth';
import useGuide from '../../../../../../hooks/useGuide';
import useAxiosSecure from '../../../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Booking = ({tour}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [guide] =useGuide();
  const {user}= useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    handleSubmit,
    control,
    register,
   
    formState: { errors },
  } = useForm();
  const { image,title,price,_id,details} = tour;
  console.log(tour);
  const onSubmit = (data) => {
    console.log(data);
    // Add logic to handle form submission (e.g., API request)
  };
 

  const handleDateChange = (date) => {
    setStartDate(date);
  };
  const handleAdd = () =>{
    if(user && user?.email){
      const cartItem ={tourItemId:_id,title,image,price,details,name:user?.name,email:user?.email}
      axiosSecure.post('/cart',cartItem)
      .then(res=>{
        if(res.data.insertedId){
          Swal.fire("data added")
        }
        
      })

    }
    else{
      Swal.fire("please Login")
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50, borderRadius: 5 }}>
        <Typography variant="h5">Book Now</Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', marginTop: 20 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                {...register('packageName', { required: 'Package Name is required' })}
                variant="outlined"
                required
                fullWidth
                label="Package Name"
                value={title}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register('touristName', { required: 'Tourist Name is required' })}
                variant="outlined"
                required
                fullWidth
                label="Tourist Name"
                defaultValue={user?.displayName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register('touristEmail', { required: 'Tourist Email is required', pattern: /^\S+@\S+$/i })}
                variant="outlined"
                required
                fullWidth
                label="Tourist Email"
                error={!!errors.touristEmail}
                helperText={errors.touristEmail && 'Enter a valid email address'}
                defaultValue={user?.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register('touristImage')}
                variant="outlined"
                fullWidth
                label="Tourist Image"
                value={image}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register('price', { required: 'Price is required' })}
                variant="outlined"
                required
                fullWidth
                label="Price"
                value={price}
              />
            </Grid>
            <Grid item xs={12}>
            {/* <DatePicker
  {...register('tourDate', { required: 'Tour Date is required' })}
  selected={control.fields.tourDate && control.fields.tourDate.value}
  onChange={(date) => setValue('tourDate', date)}
  dateFormat="dd/MM/yyyy"
  placeholderText="Tour Date"
  className="form-control"
  popperPlacement="top-start"
  popperModifiers={{
    offset: {
      enabled: true,
      offset: '5px, 10px',
    },
    preventOverflow: {
      enabled: true,
      escapeWithReference: false,
      boundariesElement: 'viewport',
    },
  }}
/> */}
  <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
      />

            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="tourGuideNameLabel">Tour Guide Name</InputLabel>
                <Controller
                  name="tourGuideName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} labelId="tourGuideNameLabel" label="Tour Guide Name">
                      {
                        guide.map(item => <MenuItem key={item._id} value={item.name}>{item.name}</MenuItem> )
                      }
                      {/* <MenuItem value="Guide1">Guide 1</MenuItem>
                      <MenuItem value="Guide2">Guide 2</MenuItem> */}
                      {/* Add more guide options as needed */}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button onClick={handleAdd} type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20 }}>
            Book Now
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Booking;
