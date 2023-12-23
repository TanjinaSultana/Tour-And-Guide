import { Grid, Typography } from '@mui/material';
import React from 'react';
import useGuide from '../../hooks/useGuide';

const Community = () => {
    const [guide] = useGuide()
    return (
        <div>
             <div  style={{marginTop:"170px"}}>
      <Grid container>
        {/* Image Section */}
        <Grid item xs={12} sm={6}>
         <img src='https://i.ibb.co/FWHG5t6/mountain.webp' style={{width:"500px",height:"700px",borderRadius:"5px"}}></img>
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} sm={6} >
          <Typography variant="h4" gutterBottom>
            Welcome to our Tour  Guide Website
          </Typography>
          <div className='flex justify-center '>

          <Typography variant="body1" className='font-base w-[250px]'>
            Discover amazing destinations with our expert guides. Plan your next adventure today!
            
          </Typography>
          </div>
          <Typography variant="body1" style={{fontWeight:"medium",fontSize:"30px"}} className='flex justify-center '>
           Meet Our Tour Guide
            
          </Typography>
          <div className='grid grid-cols-1 lg:grid-cols-4 mt-10'>

           {
            guide.map(item => <img key={item._id} src={item.image} style={{width:"150px",height:"150px",borderRadius:"50%"}}>

            </img>
                )

           }
          </div>
          {/* Additional content goes here */}
        </Grid>
      </Grid>
    </div>
        </div>
    );
};

export default Community;