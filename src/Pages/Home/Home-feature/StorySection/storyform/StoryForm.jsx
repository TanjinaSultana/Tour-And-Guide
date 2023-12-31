import React from 'react';
import useAuth from '../../../../../hooks/useAuth';
import { TextField } from '@mui/material';
import useGuide from '../../../../../hooks/useGuide';
import useCart from '../../../../../hooks/useCart';
 import Swal from 'sweetalert2';
 import useAxiosSecure from '../../../../../hooks/useAxiosSecure';

const StoryForm = () => {
    const {user} = useAuth();
    const [guide] =useGuide()
    const [cart] =useCart()
    const [axiosSecure] =useAxiosSecure()
    const handleAdd = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const guide = form.guide.value;
        const prices = form.prices.value
        const email = form.email.value
        const images = form.images.value
        const userImage = form.userImage.value
        const userName = form.userName.value
        const detail = form.detail.value
       
      
      
      
        const storyItem ={guide, name, email, prices,images,detail,userImage,userName}
        console.log(storyItem);
        axiosSecure.post('/story',storyItem)
              .then(res=>{
                if(res.data.insertedId){
                  Swal.fire("story added")
                }
      })
      }
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <form onSubmit={handleAdd}>
              <div style= {{border:"2px solid #6a2f41",padding:"70px",height:"500px",borderRadius:"5px"}}>

<div>
  <label style={{fontWeight:"bolder",fontSize:"20px"}}>Tour Guide Name:</label>
  <select
   id='guide'
    name="guide"
    type="text"
   
  >
    {guide.map((item) => (
      <option key={item._id} value={item.name}>
        {item.name}
      </option>
    ))}
  </select>
</div>
<div style={{marginTop:"10px"}}>
    
  <label style={{fontWeight:"bolder",fontSize:"20px"}}>Package Name:</label>
  <select
   id='name'
    name="name"
    type="text"
  >
    {cart.map((item) => (
      <option key={item._id} value={item.name}>
        {item.name}
      </option>
    ))}
  </select>
</div>

<div style={{marginTop:"10px"}}>
  <label style={{fontWeight:"bolder",fontSize:"20px"}}>Tourist Name:</label>
  <input
    id="userName"
    name="userName"
    type="text"
   defaultValue={user?.displayName}
  />
</div>
<div style={{marginTop:"10px"}}>
  <label style={{fontWeight:"bolder",fontSize:"20px"}}>Tourist Image:</label>
  <input
    id="userImage"
    name="userImage"
    type="text"
   defaultValue={user?.photoURL}
  />
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
<label style={{fontWeight:"bolder",fontSize:"20px"}}>Package Name:</label>
  <select
   id='images'
    name="images"
    type="text"
  >
    {cart.map((item) => (
      <option key={item._id} value={item.images}>
        {item.images}
      </option>
    ))}
  </select>
</div>
<div style={{marginTop:"10px"}}>
<label style={{fontWeight:"bolder",fontSize:"20px"}}>Package Name:</label>
  <select
   id='prices'
    name="prices"
    type="text"
  >
    {cart.map((item) => (
      <option key={item._id} value={item.prices}>
        {item.prices}
      </option>
    ))}
  </select>
</div>
<div style={{marginTop:"10px"}}>
  <label style={{fontWeight:"bolder",fontSize:"20px"}}>My Journey</label>
  <TextField
    id="detail"
    name="detail"
    type="detail"
   
  />
</div>
<div style={{marginTop:"20px",display:"flex",justifyContent:"center"}}>

{
    cart.length>0?
<button type="submit"style={{background:"#6a2f41", color:"#FFFFFF",border:"none" ,borderRadius:"5px",padding:"10px"}} >Submit</button>:<>
<button type="submit" style={{background:"#6a2f41", color:"#202122",border:"none" ,borderRadius:"5px",padding:"10px"}} disabled>Submit</button>
<h5>{
"Please Book The Tour And Visit The Spot First"}</h5>
</>
}
</div>
              </div>


</form>
        </div>
    );
};

export default StoryForm;