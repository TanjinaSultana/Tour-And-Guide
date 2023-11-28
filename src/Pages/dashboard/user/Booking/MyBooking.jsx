import React, { useEffect, useState } from 'react';
import useCart from '../../../../hooks/useCart';

import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

import Confetti from 'react-confetti'
import { useWindowSize } from '../../../../hooks/useWindowSize';
// import useAxiosSecure from '../../../../hooks/useAxiosSecure';
// import Swal from 'sweetalert2';

const MyBooking = () => {
    const [cart,refetch]= useCart();
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const [count,setCount]= useState([])
    const { width, height } = useWindowSize()
   
  useEffect(()=>{
    const remain = cart.filter(item => item.email === user?.email)
    setCount(remain);
  
  },[cart,user?.email])
 
  
    const total = cart.reduce((sum,item)=>parseFloat(item.prices) + sum,0)
    const total2 = parseFloat(total)
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
        <div style={{marginTop:"60px"}}>
        <h3>
    Total Price: ${total2}
        </h3>
        {
            count.length>=3 ? <p style={{fontWeight:"bold"}}>Congratulation!You Will Get Discount</p>:""
        }
        {/* <ul>
        {Object.entries(counts).map(([value, count]) => (
          <li key={value}>{`${value}: ${count} times`}</li>
        ))}
      </ul> */}
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
                                <td>{user.name}</td>
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
                                      {cart.length ? 
                <Link to="/dashboard/payment">
    <button className="btn btn-primary">Pay</button>
    </Link>
                :
                <button disabled className="btn btn-primary">Pay</button>
                 
            }    {
                count.length >= 3?
                <>
                 
                 
                 <button className="btn btn-ghost bg-orange-600  text-white" >Apply</button>
                 <Confetti
                 width={width}
                 height={height}
               />
               
                 </>
                                     :
                                     <button className="btn btn-ghost bg-orange-600  text-white" disabled>Apply</button>
            }
                                    </>:(user?.status === "reject"?
                                    <>
                                    <button className="btn btn-ghost bg-orange-600  text-white" disabled>Pay</button>
                                    {
                count.length >= 3?
                <>
                 
                 
                <button className="btn btn-ghost bg-orange-600  text-white" >Apply</button>
                <Confetti
                width={width}
                height={height}
              />
                </>
                                     :
                                     <button className="btn btn-ghost bg-orange-600  text-white" disabled>Apply</button>
            }
                                  
                                    </>:
                                    <>
                                    <button className="btn btn-ghost bg-orange-600  text-white" onClick={()=>handleDelete(user._id)} >Cancel</button>
                                    {
                count.length >= 3?
                <>
                 
                 
                <button className="btn btn-ghost bg-orange-600  text-white" >Apply</button>
                <Confetti
                width={width}
                height={height}
              />
                </>
                                     :
                                     <button className="btn btn-ghost bg-orange-600  text-white" disabled>Apply</button>
            }
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