/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from '../../../../../../hooks/useAuth';
import useGuide from '../../../../../../hooks/useGuide';
 import useAxiosSecure from '../../../../../../hooks/useAxiosSecure';
 import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Booking = ({tour}) => {
  const {user}= useAuth();
  const [guide] =useGuide();
  const{title,price,image,_id} = tour;
  
  const [startDate, setStartDate] = useState(new Date());
  const [tourGuideName, setTourGuideName] = useState('');
  const [axiosSecure] = useAxiosSecure();
const handleAdd = (e) => {
  e.preventDefault()
  const form = e.target;
  const name = form.name.value;
  const prices = form.prices.value
  const images = form.images.value
  const userName = form.userName.value
  const userImage = form.userImage.value
 
  const email = form.email.value
  console.log({startDate, tourGuideName, name, email, prices,images});

  const cartItem ={tourItemId:_id, startDate, tourGuideName, name, email, prices,images,userName,userImage}
  axiosSecure.post('/cart',cartItem)
        .then(res=>{


          Swal.fire({
            title: "Are you sure?",
            text: "Confirm Your Booking",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {
              if(res.data.insertedId){
                // Swal.fire({
                //   position: "top-end",
                //   icon: "success",
                //   title: "Confirm Your Booking",
                //   message:<><Link to="/cart">My Booking Page</Link></>,
                //   showConfirmButton: false,
                //   timer: 2500
                // });
                
                Swal.fire({
                  title: "Confirmed Your Booking",
                  html: '<a href="/dashboard/cart">My Booking Page</a>',
                  icon: "success"
                });
              }
            }
          });
          // if(res.data.insertedId){
          //   // Swal.fire({
          //   //   position: "top-end",
          //   //   icon: "success",
          //   //   title: "Confirm Your Booking",
          //   //   message:<><Link to="/cart">My Booking Page</Link></>,
          //   //   showConfirmButton: false,
          //   //   timer: 2500
          //   // });
            
          // }
})
}
return(
  <div style={{display:"flex",justifyContent:"center"}}>

<form onSubmit={handleAdd} >
  <div style={{border:"2px solid #6a2f41",padding:"70px",height:"350px",borderRadius:"5px"}}>

<div  >
  <label style={{fontWeight:"bolder",fontSize:"20px"}}>Package Name:</label>
  <input
    defaultValue={title}
    id="name"
    name="name"
    type="text"
    placeholder="Package Name"
    className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
    style={{padding:"10px"}}
  />
</div>
<div  style={{marginTop:"10px"}}>
  <label style={{fontWeight:"bolder",fontSize:"20px"}}>Tour Guide Name:</label>
  <select
    onChange={(e) => setTourGuideName(e.target.value)}
    name="tourGuideName"
  >
    {guide.map((item) => (
      <option key={item._id} value={item.name}>
        {item.name}
      </option>
    ))}
  </select>
</div>
<div style={{marginTop:"10px"}}>
  <label style={{fontWeight:"bolder",fontSize:"20px"}}>Date:</label>
  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
</div>
<div style={{marginTop:"10px"}}>
  <label style={{fontWeight:"bolder",fontSize:"20px"}}>User Email:</label>
  <input
    id="email"
    name="email"
    type="email"
    defaultValue={user?.email}
  />
</div>
<div style={{marginTop:"10px"}}>
  <label style={{fontWeight:"bolder",fontSize:"20px"}}>User name:</label>
  <input
    id="userName"
    name="userName"
    type="text"
    defaultValue={user?.displayName}
  />
</div>
<div style={{marginTop:"10px"}}>
  <label style={{fontWeight:"bolder",fontSize:"20px"}}>User image</label>
  <input
    id="userImage"
    name="userImage"
    type="userImage"
    defaultValue={user?.photoURL}
  />
</div>
<div style={{marginTop:"10px"}}>
  <label style={{fontWeight:"bolder",fontSize:"20px"}}>Package Image</label>
  <input
    id="images"
    name="images"
    type="text"
    defaultValue={image}
  />
</div>
<div style={{marginTop:"10px"}}>
  <label style={{fontWeight:"bolder",fontSize:"20px"}}>Price:</label>
  <input
    id="prices"
    name="prices"
    type="number"
    defaultValue={price}
  />
</div>
{
  user?
  <div style={{marginTop:"20px",display:"flex",justifyContent:"center"}}>
<button type="submit" style={{ background: 'linear-gradient(to right, #202122, #6a2f41)',color:"#FFFFFF",padding:"10px",border:"none",borderRadius:"5px"}}>Book Now</button>
</div>
:<>
 <div style={{marginTop:"20px",display:"flex",justifyContent:"center"}}>
<button type="submit" style={{ background: 'linear-gradient(to right, #202122, #6a2f41)',padding:"10px",border:"none",borderRadius:"5px"}} disabled>Book Now</button>
</div>
<Link to="/login">
<h5>{"Please Login"}</h5>
</Link>
</>
}
  </div>

</form>
  </div>


  );
}


export default Booking;
