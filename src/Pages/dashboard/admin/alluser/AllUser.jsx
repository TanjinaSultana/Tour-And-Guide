import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FaUserShield } from 'react-icons/fa';

const AllUser = () => {
    const [axiosSecure] =useAxiosSecure();
    const {data: users = [],refetch} =useQuery({
        queryKey : ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/user');
          return res.data;
        }
    })
    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/user/admin/${user?._id}`)
        .then(res =>{
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire(`${user?.name} is admin`)
            }
        })
    }
    const handleMakeGuide = user =>{
        axiosSecure.patch(`/user/tourGuide/${user?._id}`)
        .then(res =>{
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire(`${user?.name} is Tour Guide`)
            }
        })
    }
    return (
        <div>
             {/* <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
        
            <TableCell />
            <TableCell>#</TableCell>
            <TableCell align="left" style={{marginRight:"150px"}}>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          users.map((user, index) => <tr key={user._id}>
          <th  align="right">{index + 1}</th>
          <td  align="right">{user.name}</td>
          <td  align="right">{user.email}</td>
          <td  align="right">{ user.role === 'admin' ? 'admin' :
              <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button> 
              }</td>
         
      </tr>)
          }
        </TableBody>
      </Table>
        </TableContainer>  */}
          <div className="overflow-x-auto "  style={{marginTop:"40px"}}>
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user && (user.role === 'admin' ? 'admin' : user.role === 'tourGuide' ? 'tourGuide' : 'user')}
</td>
                                   {
                                    user?.role === 'admin' || user.role === 'tourGuide' ?
                                    <>
                                    <button onClick={() => handleMakeAdmin(user)} style={{background:"#6a2f41", color:"#202122",border:"none" ,borderRadius:"5px",padding:"10px"}} disabled ><FaUserShield></FaUserShield>Admin</button>
                                    <button onClick={() => handleMakeGuide(user)} style={{background:"#6a2f41", color:"#202122",border:"none" ,borderRadius:"5px",padding:"10px"}} disabled><FaUserShield></FaUserShield>Guide</button>
                                    </>:
                                    <>
                                     <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"  style={{background:"#6a2f41", color:"#FFFFFF",border:"none" ,borderRadius:"5px",padding:"10px"}}><FaUserShield></FaUserShield>Admin</button>
                                    <button onClick={() => handleMakeGuide(user)} className="btn btn-ghost bg-orange-600  text-white" style={{background:"#6a2f41", color:"#FFFFFF",border:"none" ,borderRadius:"5px",padding:"10px"}}><FaUserShield></FaUserShield>Guide</button>
                                    </>
                                   }
                             
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;