import React from 'react';
import useCart from '../../../../hooks/useCart';

import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
// import useAxiosSecure from '../../../../hooks/useAxiosSecure';
// import Swal from 'sweetalert2';

const MyBooking = () => {
    const [cart,refetch]= useCart();
    const [axiosSecure] = useAxiosSecure()
    const handleDelete = (id) =>{
       
        axiosSecure.delete(`/cart/${id}`)
        .then(res=>{
         refetch()
        if(res.data.deletedCount>0){
        Swal.fire("Cancel Booking done");
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
                            <th>Action</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.packageName}</td>
                                <td>{user.tourGuideName}</td>
                                <td>{user.startDate}</td>
                                <td>{user.prices}</td>
                                
                                  <td>
                                    {
                                        user?.status === "accept" ?<>
                                    <button className="btn btn-ghost bg-orange-600  text-white" >Accepted</button>
                                    <button className="btn btn-ghost bg-orange-600  text-white" disabled>Rejected</button>
                                    <button className="btn btn-ghost bg-orange-600  text-white" disabled>In Review</button>
                                        </>:(user?.status === "reject"?<>
                                            <button className="btn btn-ghost bg-orange-600  text-white" disabled>Accepted</button>
                                        <button className="btn btn-ghost bg-orange-600  text-white">Rejected</button>
                                        <button className="btn btn-ghost bg-orange-600  text-white" disabled>In Review</button>
                                        </>:
                                        
                                        <>
                                         <button className="btn btn-ghost bg-orange-600  text-white" disabled>Accepted</button>
                                        <button className="btn btn-ghost bg-orange-600  text-white" disabled>Rejected</button>
                                        <button className="btn btn-ghost bg-orange-600  text-white" >In Review</button>
                                        </>
                                        )
                                    }
                                    

                                   
                                  </td>
                                  <td>
                                    {
                                    user?.status === "accept"?
                                    <>
                                     <button className="btn btn-ghost bg-orange-600  text-white" >Pay</button>
                                     <button className="btn btn-ghost bg-orange-600  text-white" disabled>Apply</button>
                                    </>:(user?.status === "reject"?
                                    <>
                                    <button className="btn btn-ghost bg-orange-600  text-white" disabled>Pay</button>
                                    <button className="btn btn-ghost bg-orange-600  text-white" disabled>Apply</button>
                                    </>:
                                    <>
                                    <button className="btn btn-ghost bg-orange-600  text-white" onClick={()=>handleDelete(user._id)} >Cancel</button>
                                    <button className="btn btn-ghost bg-orange-600  text-white" disabled>Apply</button>
                                    </>
                                    )
                                    }
                                    
                                    </td>
                                  
                                   
                             
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div> 
        </div>
    );
};

export default MyBooking;