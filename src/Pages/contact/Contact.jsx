import React from 'react';
import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      
      console.log(`Name: ${name}, Email: ${email}, Description: ${description}`);
  
     
      setFormSubmitted(true);
    };
    return (
        <div style={{marginTop:"170px"}}>
            <h1 style={{display:"flex",justifyContent:"center"}}>Contact With Us</h1>
             <div style={{display:"flex",justifyContent:"center",padding:"30px"}}>
             <div>
      {formSubmitted ? (
        <p>Thank you for submitting the form! We'll be in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{border:"2px solid #6a2f41",padding:"50px"}}>
          <label >
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <br></br>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <br></br>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <br />
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"30px",}}>

          <button type="submit" style={{ background: 'linear-gradient(to right, #202122, #6a2f41)',padding:"10px",border:"none",borderRadius:"5px"}} >Submit</button>
          </div>
        </form>
      )}
    </div>
             </div>
        </div>
    );
};

export default Contact;