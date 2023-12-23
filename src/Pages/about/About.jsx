import React from 'react';
import useGuide from '../../hooks/useGuide';

const About = () => {
    const [guide] = useGuide()

    return (
        <div style={{marginTop:"170px"}}>
            <h1 style={{display:"flex",justifyContent:"center"}} className='font-bold text-3xl'>Who We Are</h1>
           <div className='flex justify-center'>
            <div>

            <h3 className='font-base flex justify-center text-xl mt-4'>Meet Our Team</h3>
            <p style={{display:"flex",justifyContent:"center",alignItems:"center",width:"400px"}} className='font-base mt-2 mb-4'>Get acquainted with the brilliant minds behind Tour Guide. From travel enthusiasts to tech innovators, our team is united by a common goal: making travel accessible, enriching, and tailored to individual desires.</p>
            </div>
           </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px" }}>
                {
                    guide.map(item=>
                        <div key={item._id}  className='rounded-xl'>

                            <img src={item.image} style={{width:"300px",height:"300px"}} className='rounded-xl'></img>
                            
                            <h3 className='flex justify-center font-medium'>{item.name}</h3>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default About;