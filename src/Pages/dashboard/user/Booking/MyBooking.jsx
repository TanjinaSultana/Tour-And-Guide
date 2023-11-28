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
                                    <button style={{background:"#6a2f41", color:"#FFFFFF",border:"none" ,borderRadius:"5px",padding:"10px"}} >Accepted</button>
                                    <button style={{background:"#6a2f41", color:"#202122",border:"none" ,borderRadius:"5px",padding:"10px"}} disabled>Rejected</button>
                                    <button  style={{background:"#6a2f41", color:"#202122",border:"none" ,borderRadius:"5px",padding:"10px"}} disabled>In Review</button>
                                        </>:(user?.status === "reject"?<>
                                            <button style={{background:"#6a2f41", color:"#202122",border:"none" ,borderRadius:"5px",padding:"10px"}}disabled>Accepted</button>
                                        <button style={{background:"#6a2f41", color:"#FFFFFF",border:"none" ,borderRadius:"5px",padding:"10px"}}>Rejected</button>
                                        <button style={{background:"#6a2f41", color:"#202122",border:"none" ,borderRadius:"5px",padding:"10px"}} disabled>In Review</button>
                                        </>:
                                        
                                        <>
                                         <button style={{background:"#6a2f41", color:"#202122",border:"none" ,borderRadius:"5px",padding:"10px"}} disabled>Accepted</button>
                                        <button style={{background:"#6a2f41", color:"#202122",border:"none" ,borderRadius:"5px",padding:"10px"}} disabled>Rejected</button>
                                        <button style={{background:"#6a2f41", color:"#FFFFFF",border:"none" ,borderRadius:"5px",padding:"10px"}}>In Review</button>
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
    <button style={{background:"#6a2f41", color:"#FFFFFF",border:"none" ,borderRadius:"5px",padding:"10px"}}>Pay</button>
    </Link>
                :
                <button disabled style={{background:"#6a2f41", color:"#202122",border:"none" ,borderRadius:"5px",padding:"10px"}}>Pay</button>
                 
            }    {
                count.length >= 3?
                <>
                 
                 
                 <button style={{background:"#6a2f41", color:"#FFFFFF",border:"none" ,borderRadius:"5px",padding:"10px"}} >Apply</button>
                 <Confetti
                 width={width}
                 height={height}
               />
               
                 </>
                                     :
                                     <button style={{background:"#6a2f41", color:"#202122",border:"none" ,borderRadius:"5px",padding:"10px"}} disabled>Apply</button>
            }
                                    </>:(user?.status === "reject"?
                                    <>
                                    <button style={{background:"#6a2f41", color:"#202122",border:"none" ,borderRadius:"5px",padding:"10px"}} disabled>Pay</button>
                                    {
                count.length >= 3?
                <>
                 
                 
                <button style={{background:"#6a2f41", color:"#FFFFFF",border:"none" ,borderRadius:"5px",padding:"10px"}} >Apply</button>
                <Confetti
                width={width}
                height={height}
              />
                </>
                                     :
                                     <button style={{background:"#6a2f41", color:"#202122",border:"none" ,borderRadius:"5px",padding:"10px"}} disabled>Apply</button>
            }
                                  
                                    </>:
                                    <>
                                    <button style={{background:"#6a2f41", color:"#FFFFFF",border:"none" ,borderRadius:"5px",padding:"10px"}} onClick={()=>handleDelete(user._id)} >Cancel</button>
                                    {
                count.length >= 3?
                <>
                 
                 
                <button style={{background:"#6a2f41", color:"#FFFFFF",border:"none" ,borderRadius:"5px",padding:"10px"}} >Apply</button>
                <Confetti
                width={width}
                height={height}
              />
                </>
                                     :
                                     <button style={{background:"#6a2f41", color:"#202122",border:"none" ,borderRadius:"5px",padding:"10px"}}disabled>Apply</button>
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