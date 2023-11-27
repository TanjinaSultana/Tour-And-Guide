// import React from 'react';
// import usePackage from '../../../../../hooks/usePackage';
// import useCart from '../../../../../hooks/useCart';

// const StoryForm = () => {
   
   
//     const handleAdd = (e)=>{
//         e.preventDefault()

//     }
//     return (
//         <div>
//             <form onSubmit={handleAdd}>
// <div>
//   <label>Package Name:</label>
//   <input
    
//     id="name"
//     name="name"
//     type="text"
//     placeholder="Package Name"
//     className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
//   />
// </div>
// <div>
//   <label>Tour Guide Name:</label>
//   <select
//     onChange={(e) => setTourGuideName(e.target.value)}
//     name="tourGuideName"
//   >
//     {guide.map((item) => (
//       <option key={item._id} value={item.name}>
//         {item.name}
//       </option>
//     ))}
//   </select>
// </div>
// <div>
//   <label>Date:</label>
//   <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
// </div>
// <div>
//   <label>User Email:</label>
//   <input
//     id="email"
//     name="email"
//     type="email"
//     defaultValue={user?.email}
//   />
// </div>
// <div>
//   <label>Package Image</label>
//   <input
//     id="images"
//     name="images"
//     type="text"
//     defaultValue={image}
//   />
// </div>
// <div>
//   <label>Price:</label>
//   <input
//     id="prices"
//     name="prices"
//     type="text"
//     defaultValue={price}
//   />
// </div>
// <button type="submit">Submit</button>

// </form>
//         </div>
//     );
// };

// export default StoryForm;