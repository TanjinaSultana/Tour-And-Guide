/* eslint-disable react/prop-types */
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const TourGuide = ({items}) => {
   
    const {name, image,email,contact,education,skills,workExperience,_id} = items
    return (
        <div>
              <Card sx={{ maxWidth: 345 }} style={{height:"345px"}}>
      <CardMedia
        sx={{ height: 280 }}
        style={{borderRadius:"4px"}}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  style={{display:"flex",justifyContent:"center"}}>
         {name}
         <div  style={{display:"flex",justifyContent:"end"}}>
<Link to={`/guide/${_id}`}>
        <Button size="small" style={{color:"#FFFFFF",backgroundColor:"#6a2f41"}}>Details</Button>
</Link>
         </div>
        </Typography>
      
      </CardContent>
      <CardActions>
        <div style={{display:"flex",justifyContent:"center"}}>

        </div>
      </CardActions>
    </Card>
        </div>
    );
};

export default TourGuide;