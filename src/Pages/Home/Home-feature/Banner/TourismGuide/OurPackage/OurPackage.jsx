import React, { useEffect, useState } from 'react';
import OurPackages from './OurPackages';

const OurPackage = () => {
    const [pacakge,setPacakge] = useState([])
    useEffect(
        ()=>{
            fetch('tour.json')
            .then(res=>res.json())
            .then(data =>{
                setPacakge(data);
            })
        },[])
    return (
        <div>
          <h1>{pacakge.length}</h1>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px" }}>

             {
                pacakge.map(item => <OurPackages
                    key={item._id}
                    items={item}
                ></OurPackages>)
            }
          </div>
          
        </div>
    );
};

export default OurPackage;