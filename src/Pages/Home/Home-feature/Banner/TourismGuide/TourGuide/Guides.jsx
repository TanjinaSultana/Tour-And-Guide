/* eslint-disable react/prop-types */
import React from 'react';

import { Container, Typography, Grid, Paper } from '@mui/material';



const Guides = ({guide}) => {
  console.log(guide);
    const  {name, image,email,contact,education,skills,workExperience,_id} = guide
   
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
        <Grid item xs={12} md={6}>
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
        </div>
    );
};

export default Guides;