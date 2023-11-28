import React, { useEffect, useState } from 'react';
import useCart from '../../../../hooks/useCart';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AssignTour = () => {
    const [assignTour,setAssignTour]= useState([])
    const [cart,] =useCart()
    const {user}= useAuth()
    const [axiosSecure] = useAxiosSecure()
    useEffect(()=>{
        const remaining = cart.filter(item => item.tourGuideName === user?.displayName)
        setAssignTour(remaining);
    },[cart,user?.displayName])
    const handleAccept = user =>{
        axiosSecure.patch(`/cart/accept/${user?._id}`)
        .then(res =>{
            if(res.data.modifiedCount>0){
               
                Swal.fire(`${user?.name} is accepted`)
            }
        })
    }
    const handleReject = user =>{
        axiosSecure.patch(`/cart/reject/${user?._id}`)
        .then(res =>{
            if(res.data.modifiedCount>0){
               
                Swal.fire(`${user?.name} is rejected`)
            }
        })
    }

    return (
       <div  style={{marginTop:"70px"}}>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>PackageName</th>
                            <th>TourGuideName</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                          
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            assignTour.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.tourGuideName}</td>
                                <td>{user?.startDate}</td>
                                <td>{user?.prices}</td>
                                
                                  <td>

                                    <button style={{background:"#6a2f41", color:"#FFFFFF",border:"none" ,borderRadius:"5px",padding:"10px"}} onClick={() => handleAccept(user)} >Accept</button>
                                    <button style={{background:"#6a2f41", color:"#FFFFFF",border:"none" ,borderRadius:"5px",padding:"10px"}} onClick={() => handleReject(user)}>Reject</button>
                                   
                                  </td>
                                  
                                   
                             
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div> 
        </div>
    );
};

export default AssignTour;