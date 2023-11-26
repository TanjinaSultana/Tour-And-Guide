import React from 'react';
import useWish from '../../../../hooks/useWish';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
//import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const MyWishlist = () => {
    const buttonStyle = {
        textDecoration: 'none', // Remove underline
      };
    const [wish,refetch] =useWish();
    const [axiosSecure] = useAxiosSecure()
    console.log(wish);
    const handleDelete = (id) =>{
        axiosSecure.delete(`/wish/${id}`)
        .then(res=>{
         refetch()
        if(res.data.deletedCount>0){
        Swal.fire("item  deleted");
        }
        })
     }
    //const [axiosSecure] = useAxiosSecure()
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wish.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td><img src={user.image} style={{width:"70px",height:"70px",borderRadius:"50%"}}></img></td>
                                <td>{user.title}</td>
                                <td>{user.type}</td>
                                <td>{user.price}</td>
                                  <td>

                                    <button className="btn btn-ghost bg-orange-600  text-white" onClick={()=>handleDelete(user.tourItemId)} ><FaTrashAlt></FaTrashAlt></button>
                                    <Link to={`/${user.tourItemId}`}>
                                        <Button variant="outlined" style={buttonStyle}  >
                                         View Details
                                        </Button>
      {/* <div style={{display:"flex",justifyContent:"end",padding:"20px"}}>

      </div> */}
      </Link>
                                  </td>
                                  
                                   
                             
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div> 
        </div>
    );
};

export default MyWishlist;