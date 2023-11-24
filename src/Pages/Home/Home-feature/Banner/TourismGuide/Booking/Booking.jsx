import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Typography, Paper, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add logic to handle form submission (e.g., API request)
  };

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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register('touristName', { required: 'Tourist Name is required' })}
                variant="outlined"
                required
                fullWidth
                label="Tourist Name"
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register('touristImage')}
                variant="outlined"
                fullWidth
                label="Tourist Image"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register('price', { required: 'Price is required' })}
                variant="outlined"
                required
                fullWidth
                label="Price"
              />
            </Grid>
            <Grid item xs={12}>
              <DatePicker
                {...register('tourDate', { required: 'Tour Date is required' })}
                selected={control.tourDate}
                onChange={(date) => control.onChange('tourDate', date)}
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
                      <MenuItem value="Guide1">Guide 1</MenuItem>
                      <MenuItem value="Guide2">Guide 2</MenuItem>
                      {/* Add more guide options as needed */}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20 }}>
            Book Now
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default BookingForm;
