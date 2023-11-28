import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const AdminHome = () => {
    const {user} = useAuth();
    
    return (
        <div>
            <h2 style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"200px"}}>
                <span>Hi,Welcome </span>
                <br></br>
                {
                    user?.displayName ? user?.displayName: "back"
                }
                </h2>
        </div>
    );
};

export default AdminHome;