/* eslint-disable react/prop-types */
import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"300px"}}>
            <h3 style={{fontWeight:"bold",marginTop:"100px",width:"500px",fontSize:"30px",color:"linear-gradient(to right, #202122, #6a2f41)" }}>{heading}</h3>
           
        </div>
             <div className="mx-auto text-center md:w-4/12 my-8" style={{display:"flex",justifyContent:"center",marginLeft:"300px"}}>
            <p style={{fontWeight:"lighter",marginTop:"-30px",fontSize:"16px",color:"#6a2f41",width:"400px" }}> {subHeading}</p>
        </div>
        </>
    );
};

export default SectionTitle;