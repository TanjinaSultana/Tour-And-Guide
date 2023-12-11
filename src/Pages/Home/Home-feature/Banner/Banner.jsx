import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SectionTitle from '../../../../components/sectionTitle/SectionTitle';
const Banner = () => {
    return (
        <div>
           <Container  style={{ paddingTop: '100px', height:"100vh",marginTop:"-10px" ,paddingBottom: '100px',backgroundImage:'url("https://i.ibb.co/jb3vGss/images.jpg")',backgroundSize:"cover" }}>
      <Typography variant="h4" component="div" gutterBottom > 
      {/* <SectionTitle
       heading={" Experience the World with Insightful Guided Tours With Us "}
     
       subHeading={"Guides Who Turn Your Travel Dreams into Reality, One Tour at a Time.Let Our Guides Lead You to the Best-Kept Secrets of Every Location."}
       >

      </SectionTitle> */}<div style={{marginTop:"150px"}}>

      <h4 className='-mt-20'>Experience the World with <br></br>Insightful Guided Tours With Us</h4>
      <br></br>
      <p style={{width:"500px",fontSize:"16px",marginTop:"-30px"}} className='mt-30'>Guides Who Turn Your Travel Dreams into Reality, <br></br>One Tour at a Time.Let Our Guides Lead You to the Best-Kept Secrets of Every Location.</p>
      </div>
      {/* Experience the World with Insightful <br></br> Guided Tours With Us */}
      </Typography>
      {/* <Typography variant="subtitle1" paragraph>
        Discover amazing features and services that make us stand out.
      </Typography> */}
      <Button variant="contained"   style={{ background: 'linear-gradient(to right, #202122, #6a2f41)'}}>
        Explore More
      </Button>
    </Container>

        </div>
    );
};

export default Banner;