/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';

const ViewDetail = ({tourPackages}) => {
    const { image,type,title,price,_id,details} = tourPackages
    return (
        <div style={{marginTop:"100px"}}>
               <Container>
      <Grid container spacing={2}>
        {/* Image Side */}
        <Grid item xs={12} md={6}>
          <img
            src={image}
            alt="Hero Image"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>

        {/* Details Side */}
        <Grid item xs={12} md={6} container alignItems="center">
          <div>
            <Typography variant="h3" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
       {type}
        </Typography>
            <Typography variant="body1" paragraph>
              {details}
            </Typography>
            <Button variant="contained" color="primary">
              Explore Tours
            </Button>
            <Button size="small">${price}</Button>
          </div>
        </Grid>
      </Grid>
    </Container>
        </div>
    );
};

export default ViewDetail;