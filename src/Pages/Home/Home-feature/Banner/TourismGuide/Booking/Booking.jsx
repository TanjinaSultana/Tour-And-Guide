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
 
  const email = form.email.value
  console.log({startDate, tourGuideName, name, email, prices,images});

  const cartItem ={tourItemId:_id, startDate, tourGuideName, name, email, prices,images}
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
<form onSubmit={handleAdd}>
<div>
  <label>Package Name:</label>
  <input
    defaultValue={title}
    id="name"
    name="name"
    type="text"
    placeholder="Package Name"
    className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
  />
</div>
<div>
  <label>Tour Guide Name:</label>
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
<div>
  <label>Date:</label>
  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
</div>
<div>
  <label>User Email:</label>
  <input
    id="email"
    name="email"
    type="email"
    defaultValue={user?.email}
  />
</div>
<div>
  <label>Package Image</label>
  <input
    id="images"
    name="images"
    type="text"
    defaultValue={image}
  />
</div>
<div>
  <label>Price:</label>
  <input
    id="prices"
    name="prices"
    type="number"
    defaultValue={price}
  />
</div>
{
  user?
<button type="submit">Book Now</button>:<>
<button type="submit" disabled>Book Now</button>
<Link to="/login">
<h5>{"Please Login"}</h5>
</Link>
</>
}

</form>


  );
}


export default Booking;
