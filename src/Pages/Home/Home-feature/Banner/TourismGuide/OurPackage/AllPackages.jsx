/* eslint-disable react/prop-types */
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../../hooks/useAxiosSecure';
import useAuth from '../../../../../../hooks/useAuth';
import FavoriteIcon from '@mui/icons-material/Favorite';

const AllPackages = ({items}) => {
    const buttonStyle = {
        textDecoration: 'none', // Remove underline
      };
    const { image,type,title,price,_id} = items
    const {user}= useAuth()
    const [axiosSecure] = useAxiosSecure();
    const handleAdd = ()=>{
      if(user && user?.email){
        const wishItem = {tourItemId: _id,title,type,image,price,email:user?.email}
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
        <div>
            <div >
              <Card className='w-[350px] h-full'>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      /> */}
      <img src={image } className='w-[400px] h-[200px]'></img>
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
        <Button size="small" style={{fontWeight:"normal",fontSize:"20px"}}>${price}</Button>
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
        </div>
    );
};

export default AllPackages;