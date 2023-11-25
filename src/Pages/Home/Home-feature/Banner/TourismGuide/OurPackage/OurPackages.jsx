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
import useAuth from '../../../../../../hooks/useAuth';
import useAxiosSecure from '../../../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const OurPackages = ({items}) => {
  const buttonStyle = {
    textDecoration: 'none', // Remove underline
  };
const { image,type,title,price,_id} = items
const {user}= useAuth()
const [axiosSecure] = useAxiosSecure();
const handleAdd = ()=>{
  if(user && user?.email){
    const wishItem = {tourItemId: _id,title,image,price,email:user?.email}
    axiosSecure.post("/wish",wishItem)
    .then(res=>{
      if(res.data.insertedId){
        Swal.fire("Data Added To WishList")
      }
    })
  }else{
    Swal.fire("Please login")
  }
}
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
        <button onClick={handleAdd}>

      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        </button>
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