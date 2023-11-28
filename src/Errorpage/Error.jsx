import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1 style={{display:"flex",justifyContent:"center"}}>Error!</h1>
            <div style={{display:"flex",justifyContent:"center"}}>

            <Link to="/">
           <button style={{ background: 'linear-gradient(to right, #202122, #6a2f41)',padding:"10px",border:"none",borderRadius:"5px",listStyle:"none",paddingLeft:"40px",paddingRight:"40px",color:"#FFFFFF",fontSize:"16px",fontWeight:"bold",display:"flex",justifyContent:"center"}}>
            Back
            </button> 
            </Link>
            </div>
        </div>
    );
};

export default Error;