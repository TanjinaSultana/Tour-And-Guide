import React, { useEffect, useState } from 'react';
import useStory from '../../../../../hooks/useStory';
import { useParams } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FacebookIcon, FacebookShareButton, FacebookShareCount } from 'react-share';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));


 

const StoryDetails = () => {
    const [storys,setStorys] =useState({})
    const [story]=useStory();
    const {id} = useParams();
    useEffect(() =>{
        const remaining = story?.find(item => item._id == id);
        setStorys(remaining);
        
    },[id,story])
   
      
    const shareUrl ="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fgithub.com"
        const handleShare = () => {
          // Implement any additional logic you need when the share button is clicked
          console.log('Share button clicked!');
        };
//     const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
    return (
        <div style={{ marginTop:"140px",display:"flex",justifyContent:"center" }}>
               <Card sx={{ maxWidth: 600 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <img src={storys?.userImage} style={{width:"600px",height:"70px",borderRadius:"50%"}}></img>
          </Avatar>
         
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={storys?.userName}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={storys?.images}
        alt="Paella dish"
      />
      <div>

      <CardContent>
        <Typography variant="body2" style={{fontSize:"20px",fontWeight:"bold",marginTop:"-10px"}}>
          {storys?.name}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.primary" style={{fontWeight:"bold",marginTop:"-25px"}}>
          {storys.guide}
        </Typography>
      </CardContent>
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary"  style={{fontWeight:"medium",marginTop:"-25px"}}>
          {storys.detail}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" style={{fontSize:"20px"}}>
         ${storys.prices}
        </IconButton>
        <FacebookShareButton url={shareUrl} onClick={handleShare}/>
        < FacebookIcon aria-label="share" style={{width:"40px",height:"40px",borderRadius:"50%"}} onClick={handleShare}>
        </FacebookIcon >
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </div>
    );
};

export default StoryDetails;