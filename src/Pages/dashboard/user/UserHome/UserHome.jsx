import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Avatar } from '@mui/material';

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
             <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

<div style={{backgroundColor:"#FFFFFF",border:"2px solid #6a2f41", width:"540px",display:"flex",justifyContent:"center", marginTop:"50px"}}>
<Avatar
alt={user?.displayName}
src={user?.photoURL}
sx={{ width: 170, height: 170 }}

/><div>

<h4>{user?.displayName}</h4>
<h4>{user?.email}</h4>

</div>
</div>
</div>
        </div>
    );
};

export default UserHome;