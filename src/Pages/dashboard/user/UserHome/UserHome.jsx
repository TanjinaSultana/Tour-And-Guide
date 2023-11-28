import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Avatar } from '@mui/material';
import StoryForm from '../../../Home/Home-feature/StorySection/storyform/StoryForm';

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
             <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

<div style={{backgroundColor:"#FFFFFF", width:"540px", marginTop:"50px"}}>
<Avatar
alt={user?.displayName}
src={user?.photoURL}
sx={{ width: 170, height: 170 }}

/>
<div>

<h4>Hey I am {user?.displayName}</h4>
<h4>My Email :{user?.email}</h4>

</div>
</div>
</div>
<StoryForm></StoryForm>
        </div>
    );
};

export default UserHome;