/* eslint-disable react/prop-types */
import React from 'react';




const Gallery = ({gallery}) => {
    console.log(gallery);
    return (
        <div style={{marginTop:"100px"}}>
          
   <div style={{width:"300px",height:"300px",display:"flex",gap:"40px"}}>
<img src={gallery.image} style={{width:"400px",height:"400px",borderTopLeftRadius:"50px",borderBottomRightRadius:"50px"}}></img>
   </div>
   
    
        </div>
    );
};

export default Gallery;