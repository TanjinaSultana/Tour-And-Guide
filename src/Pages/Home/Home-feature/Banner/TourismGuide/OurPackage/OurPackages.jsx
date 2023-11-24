/* eslint-disable react/prop-types */
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

const OurPackages = ({items}) => {
  const buttonStyle = {
    textDecoration: 'none', // Remove underline
  };
const { image,type,title,price,_id} = items
    return (
        <div >
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {type}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button size="small">${price}</Button>
      </CardActions>
      <Link to={`/${_id}`}>
      <div style={{display:"flex",justifyContent:"end",padding:"20px"}}>

      <Button variant="outlined" style={buttonStyle}  >
       View Details
      </Button>
      </div>
      </Link>
    </Card>
        </div>
    );
};

export default OurPackages;