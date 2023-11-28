/* eslint-disable react/prop-types */
import React from 'react';

import { Container, Typography, Grid, Paper, TextField } from '@mui/material';
import useAuth from '../../../../../../hooks/useAuth';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../../../hooks/useAxiosPublic';



const Guides = ({guide}) => {
const {user} = useAuth()
const axiosPublic= useAxiosPublic()
    const  {name, image,email,contact,education,skills,workExperience,_id} = guide
    const handleAdd = (e) => {
      e.preventDefault()
      const form = e.target;
      const rating = form.rating.value;
      const comment = form.comment.value;

     
    
    
    
      const reviewItem ={rating,comment}
     
      axiosPublic.post('/review',reviewItem)
            .then(res=>{
              if(res.data.insertedId){
                Swal.fire("we noticed your comment")
              }
    })
    }
   
    return (
        <div>
              <Container maxWidth="md" style={{padding: "4px",
    marginTop: "5px",
    backgroundColor: '#f8f8f8'}}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "4px" }}>
            <img
              src={image} // Assuming guide.image is the image URL
              alt={name}
             style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px'}}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} style={{marginTop:"100px"}}>
          <Paper elevation={3} style={{ padding: "5px" }}>
            <Typography variant="h4">{name}</Typography>
            <Typography variant="subtitle1">{email}</Typography>
            <Typography variant="subtitle1">{contact}</Typography>
            <Typography variant="body1">
              <strong>Education:</strong> {education}
            </Typography>
            <Typography variant="body1">
              <strong>Skills:</strong> {skills}
            </Typography>
            <Typography variant="body1">
              <strong>Work Experience:</strong> {workExperience}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    <h1>Review Section</h1>
    <div style={{display:"flex",justifyContent:"center"}}>
            <form onSubmit={handleAdd}>
              <div style= {{border:"2px solid #6a2f41",padding:"70px",height:"100px",borderRadius:"5px"}}>




              <div>
  <label style={{fontWeight:"bolder",fontSize:"20px"}}>Rating:</label>
  <select
   id='rating'
    name="rating"
    type="number"
   
  >
  <option >1</option>
  <option >2</option>
  <option >3</option>
  <option >4</option>
  <option >5</option>
    
  </select>
</div>

<div style={{marginTop:"10px"}}>
  <label style={{fontWeight:"bolder",fontSize:"20px"}}>Comment</label>
  <TextField
    id="comment"
    name="comment"
    type="comment"
   
  />
</div>
<div style={{marginTop:"20px",display:"flex",justifyContent:"center"}}>

{
    user?
<button type="submit" style={{ background: 'linear-gradient(to right, #202122, #6a2f41)',padding:"10px",border:"none",borderRadius:"5px"}} >Submit</button>:<>
<button type="submit"  style={{ background: 'linear-gradient(to right, #202122, #6a2f41)',padding:"10px",border:"none",borderRadius:"5px"}} disabled>Submit</button>
<br></br>
<Link to="/login">{"Please Login"}</Link>
</>
}
</div>
              </div>


</form>
        </div>
        </div>
    );
};

export default Guides;