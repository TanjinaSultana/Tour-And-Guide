import React, { useEffect, useState } from 'react';
import usePackage from '../../../../../hooks/usePackage';
import {  useParams } from 'react-router-dom';
import EachTypes from './EachTypes';



const EachType = () => {
    const [types,setTypes]= useState([])
  const [packages]= usePackage();
    const {type}= useParams();
   
    
    useEffect(()=>{
        const remaining = packages.filter(item => item.type === type);
        
        setTypes(remaining);
        // axios.get(`http://localhost:5005/package/${type}`)
        // .then(res =>{
        //   setTypes(res.data);
         
        //   })
    },[packages,type])
  
    return (
     <div>
        {
            types.map(item => <EachTypes
                key={item._id}
                items={item}
            ></EachTypes>)
        }
     </div>
    );
};

export default EachType;