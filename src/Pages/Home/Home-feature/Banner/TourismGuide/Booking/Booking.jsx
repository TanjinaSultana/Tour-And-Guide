/* eslint-disable react/prop-types */
import React, { useState } from 'react';
//import { useForm, Controller } from 'react-hook-form';
//import { TextField, Button, Container, Typography, Paper, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from '../../../../../../hooks/useAuth';
import useGuide from '../../../../../../hooks/useGuide';
import useAxiosSecure from '../../../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
//import useAxiosPublic from '../../../../../../hooks/useAxiosPublic';
//const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
//const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Booking = ({tour}) => {
  const {user}= useAuth();
  const [guide] =useGuide();
  const{title,price} = tour;
  
  const [startDate, setStartDate] = useState(new Date());
  const [tourGuideName, setTourGuideName] = useState('');
  const [packageName, setPackageName] = useState(title);
 
  const [email, setUserEmail] = useState(user?.email);
  const [prices, setPrices] = useState(price);

  const [axiosSecure] = useAxiosSecure();
const handleAdd = (e) => {
  e.preventDefault()
  console.log({startDate, tourGuideName, packageName, email, prices});
  const cartItem ={
    startDate, tourGuideName, packageName, email, prices
  }
  axiosSecure.post('/cart',cartItem)
        .then(res=>{
          if(res.data.insertedId){
            Swal.fire("data added")
          }
})
}
  //ater all

  // const [startDate, setStartDate] = useState(new Date());
  // const axiosPublic = useAxiosPublic()
  // const {
  //   handleSubmit,
  //   control,
  //   register,
   
  //   formState: { errors },
  // } = useForm();
  
 
  
  
  // const handleDateChange = (date) => {
  //   setStartDate(date);
  // };
  // const onSubmit = async(data) => {
  //   console.log(data);
   
  //     const imageFile = {image: data.image[0]}
  //     const res = await axiosPublic.post(image_hosting_api, imageFile, {
  //         headers: {
  //             'content-type': 'multipart/form-data'
  //         }
  //     });
  //     console.log(res.data);
  //     if(res.data.success){

  //       const cartItem ={
  //          //tourItemId:_id,
  //         // title,
  //         // image,
  //         // price,
  //         // details,
  //         // date,
  //         // name:user?.name,
  //         // email:user?.email
  
  //         packageName: data.packageName,
  //         touristName: data.touristName,
  //         touristEmail: data.touristEmail,
  //         image: res.data.data.display_url,
  //         price: data.price,
  //         date: data.date,
  //         tourGuideName: data.tourGuideName,
  
  //       }
  //       console.log(cartItem);
  //       axiosSecure.post('/cart',cartItem)
  //       .then(res=>{
  //         if(res.data.insertedId){
  //           Swal.fire("data added")
  //         }
          
  //       })
  //     }

    
  
  
  // };
  // const handleAdd = () =>{
  //   if(user && user?.email){
  //     const cartItem ={
  //       // tourItemId:_id,
  //       // title,
  //       // image,
  //       // price,
  //       // details,
  //       // date,
  //       // name:user?.name,
  //       // email:user?.email

  //       packageName: data.packageName,
  //     }
  //     axiosSecure.post('/cart',cartItem)
  //     .then(res=>{
  //       if(res.data.insertedId){
  //         Swal.fire("data added")
  //       }
        
  //     })

  //   }
  //   else{
  //     Swal.fire("please Login")
  //   }
  // }
  return (
//     <Container component="main" maxWidth="xs">
//       <Paper elevation={3} style={{ padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50, borderRadius: 5 }}>
//         <Typography variant="h5">Book Now</Typography>
//         <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', marginTop: 20 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 {...register('packageName', { required: 'Package Name is required' })}
//                 variant="outlined"
//                 required
//                 fullWidth
//                 label="Package Name"
//                defaultValue={title || ""}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 {...register('touristName', { required: 'Tourist Name is required' })}
//                 variant="outlined"
//                 required
//                 fullWidth
//                 label="Tourist Name"
//                 defaultValue={user?.displayName || ""}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 {...register('touristEmail', { required: 'Tourist Email is required', pattern: /^\S+@\S+$/i })}
//                 variant="outlined"
//                 required
//                 fullWidth
//                 label="Tourist Email"
//                 error={!!errors.touristEmail}
//                 helperText={errors.touristEmail && 'Enter a valid email address'}
//                 defaultValue={user?.email || ''}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <input {...register('image', { required: 'Image is required' })} type="file" 
             
//               className="file-input w-full max-w-xs" />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 {...register('price', { required: 'Price is required' })}
//                 variant="outlined"
//                 required
//                 fullWidth
//                 label="Price"
//                 defaultValue={price || ""}
//               />
//             </Grid>
//             <Grid item xs={12}>
//   <DatePicker
//     {...register('date', { required: 'Tour Date is required' })}
//     selected={startDate}
//     onChange={handleDateChange}
//     dateFormat="dd/MM/yyyy"
//     placeholderText="Select a date"
//   />
// </Grid>

//             <Grid item xs={12}>
//               <FormControl fullWidth>
//                 {/* <InputLabel id="tourGuideNameLabel">Tour Guide Name</InputLabel> */}
//                 {/* <Controller
//                  {...register('tourGuideName',{required:"Tour Guide Name is required"})}
                 
//                   control={control}
                 
//                   render={({ field }) => (
//                     <Select {...field} labelId="tourGuideNameLabel" label="Tour Guide Name">
//                       {
//                         guide.map(item => <MenuItem key={item._id} value={item.name}>{item.name}</MenuItem> )
//                       }
//                     </Select>
//                   )}
//                 /> */}
//                 <Controller
//   {...register('tourGuideName')}
//   name="tourGuideName"
//   control={control}
//   defaultValue={guide.length > 0 ? guide[0].name : ''}
//   render={({ field }) => (
//     <Select {...field} labelId="tourGuideNameLabel" label="Tour Guide Name">
//       {guide.map((item) => (
//         <MenuItem key={item._id} value={item.name}>
//           {item.name}
//         </MenuItem>
//       ))}
//     </Select>
//   )}
// />
//               </FormControl>
//             </Grid>
//           </Grid>
//           <Button   type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20 }}>
//             Book Now
//           </Button>
//         </form>
//       </Paper>
//     </Container>
<form >
<div>
  <label>Package Name:</label>
  {/* <input
  type="text"
 value={packageName}
  onChange={(e) => setPackageName(e.target.value)}
/> */}
<input onChange={(e) =>
setPackageName(e.target.value)} defaultValue={title} id="packageName" name="packageName" type="text" placeholder="Package Name" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
</div>
<div>
  <label>Tour Guide Name:</label>
  <select
   
    onChange={(e) => setTourGuideName(e.target.value)}
  >
     {guide.map((item) => (
      
    <option key={item._id} value={item.name}> {item.name}</option>
     ))}
   
  </select>
</div>
<div>
  <label>Date:</label>
  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
</div>
{/* <div>
  <label>Tour Guide Email:</label>
  <input
    type="email"
    value={guide.email}
    onChange={(e) => setTourGuideEmail(e.target.value)}
  />
</div> */}
<div>
  <label>User Email:</label>
  <input
    type="email"
  value={email}
    onChange={(e) => setUserEmail(e.target.value)}
  />
</div>
<div>
  <label>Price:</label>
  <input
    type="text"
  defaultValue={price}
    onChange={(e) => setPrices(e.target.value)}
  />
</div>
<button onClick={handleAdd} type="submit">Submit</button>
</form>


  );
};


export default Booking;
