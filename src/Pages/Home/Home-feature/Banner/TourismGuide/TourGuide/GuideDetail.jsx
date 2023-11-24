import React, { useEffect, useState } from 'react';
import useGuide from '../../../../../../hooks/useGuide';
import { useParams } from 'react-router-dom';
import Guides from './Guides';

const GuideDetail = () => {
    const [guides,setGuides] = useState([])
    const [guide] =useGuide();
   
   console.log(guide);
    const {id} = useParams();
    console.log(id);
    useEffect(() =>{
        const remaining = guide?.find(item => item._id == id);
        setGuides(remaining);
        
    },[id,guide])
  console.log(guides);
    return (
        <div style={{marginTop:"200px",marginBottom:"100px"}}>
             
             <Guides guide={guides}></Guides>
        </div>
    );
};

export default GuideDetail;