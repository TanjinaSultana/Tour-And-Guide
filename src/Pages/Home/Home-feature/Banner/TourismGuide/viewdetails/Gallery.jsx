/* eslint-disable react/prop-types */
import React from 'react';
import SectionTitle from '../../../../../../components/sectionTitle/SectionTitle';




const Gallery = ({gallery}) => {
    console.log(gallery);
    return (
        <div style={{marginTop:"40px"}}>
<SectionTitle 
heading={"Gallery Section"}
>

</SectionTitle>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)"}}>
          
 
   <div style={{width:"300px",height:"300px",display:"flex",gap:"40px"}}>
<img src={gallery.gallery1} style={{width:"400px",height:"400px",borderTopLeftRadius:"50px",borderBottomRightRadius:"50px"}}></img>
   </div>
   <div style={{width:"300px",height:"300px",marginTop:"200px"}}>
<img src={gallery.gallery2} style={{width:"400px",height:"400px",borderTopLeftRadius:"50px",borderBottomRightRadius:"50px"}}></img>
   </div>
   <div style={{width:"300px",height:"300px",display:"flex",gap:"40px"}}>
<img src={gallery.gallery3} style={{width:"400px",height:"400px",borderTopLeftRadius:"50px",borderBottomRightRadius:"50px"}}></img>
   </div>
   
    
        </div>
        </div>
    );
};

export default Gallery;