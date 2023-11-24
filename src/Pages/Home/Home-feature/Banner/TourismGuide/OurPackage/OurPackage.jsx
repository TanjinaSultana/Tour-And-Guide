import React, { useEffect, useState } from 'react';
import OurPackages from './OurPackages';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import usePackage from '../../../../../../hooks/usePackage';

const OurPackage = () => {
    const [pacakges] =usePackage();
   
    //const [pacakge,setPacakge] = useState([])
    // useEffect(
    //     ()=>{
    //         fetch('tour.json')
    //         .then(res=>res.json())
    //         .then(data =>{
    //             setPacakge(data);
    //         })
    //     },[])
    return (
        <div>
          <h1>{pacakges.length}</h1>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px" }}  key={pacakges._id}>

             {
                pacakges.map(item => <OurPackages
                    key={item._id}
                    items={item}
                ></OurPackages>)
            }
          </div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"30px",}}>

          <Button variant="contained" endIcon={<ArrowForwardIcon />} style={{ background: 'linear-gradient(to right, #202122, #6a2f41)'}}>
        All Packages
      </Button>
          </div>
          
        </div>
    );
};

export default OurPackage;