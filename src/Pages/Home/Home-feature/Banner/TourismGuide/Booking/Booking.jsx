/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from '../../../../../../hooks/useAuth';
import useGuide from '../../../../../../hooks/useGuide';
 import useAxiosSecure from '../../../../../../hooks/useAxiosSecure';
 import Swal from 'sweetalert2';

const Booking = ({tour}) => {
  const {user}= useAuth();
  const [guide] =useGuide();
  const{title,price,image} = tour;
  
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

  const cartItem ={startDate, tourGuideName, name, email, prices,images}
  axiosSecure.post('/cart',cartItem)
        .then(res=>{
          if(res.data.insertedId){
            Swal.fire("data added")
          }
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
    type="text"
    defaultValue={price}
  />
</div>
<button type="submit">Submit</button>

</form>


  );
}


export default Booking;
