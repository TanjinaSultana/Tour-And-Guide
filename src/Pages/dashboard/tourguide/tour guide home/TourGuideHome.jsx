import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

import useGuide from '../../../../hooks/useGuide';
import { Avatar } from '@mui/material';
import AddGuide from '../addGuide/AddGuide';

const TourGuideHome = () => {
    const [guides,setGuides]= useState({})
    const {user} =useAuth();
    const [guide,loading] = useGuide()
    useEffect(()=>{

       if(user?.email){
        const remaining = guide.find(item => item.email === user?.email)
        setGuides(remaining);
        //console.log(remaining)
       }
    },[guide,user?.email])
    if(loading){
        return <h1>loading</h1>
    }
    return (
        <div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

            <div style={{backgroundColor:"#FFFFFF",border:"2px solid #6a2f41", width:"540px",display:"flex",justifyContent:"center", marginTop:"50px"}}>
            <Avatar
  alt={guides?.name}
  src={guides?.image}
  sx={{ width: 170, height: 170 }}

/><div>

            <h4>{guides?.name}</h4>
            <p>{guides?.email}</p>
            <p>{guides?.contact}</p>
            <p>{guides?.education}</p>
            <p>{guides?.skills}</p>
            <p>{guides?.workExperiance}</p>
</div>
            </div>
            </div>
            <h3>Add A Tour Guide</h3>
            <AddGuide></AddGuide>
        </div>
    );
};

export default TourGuideHome;