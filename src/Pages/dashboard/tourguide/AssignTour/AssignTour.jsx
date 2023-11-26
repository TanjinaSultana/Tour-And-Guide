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
       <div>
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
                                <td>{user.packageName}</td>
                                <td>{user.tourGuideName}</td>
                                <td>{user.startDate}</td>
                                <td>{user.prices}</td>
                                
                                  <td>

                                    <button className="btn btn-ghost bg-orange-600  text-white" onClick={() => handleAccept(user)} >Accept</button>
                                    <button className="btn btn-ghost bg-orange-600  text-white" onClick={() => handleReject(user)}>Reject</button>
                                   
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