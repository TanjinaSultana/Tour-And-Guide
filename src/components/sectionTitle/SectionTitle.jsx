/* eslint-disable react/prop-types */
import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <h3 style={{fontWeight:"bold",marginTop:"100px",width:"500px" }}>{heading}</h3>
           
             <div className="mx-auto text-center md:w-4/12 my-8">
            <p style={{fontWeight:"lighter",marginTop:"-30px",fontSize:"16px",color:"#6a2f41",width:"400px" }}> {subHeading}</p>
        </div>
        </div>
    );
};

export default SectionTitle;