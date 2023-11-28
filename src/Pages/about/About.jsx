import React from 'react';
import useGuide from '../../hooks/useGuide';

const About = () => {
    const [guide] = useGuide()

    return (
        <div style={{marginTop:"170px"}}>
            <h1 style={{display:"flex",justifyContent:"center"}}>Who We Are</h1>
            <h3>Meet the Team:</h3>
            <p style={{display:"flex",justifyContent:"center",alignItems:"center",width:"400px"}}>Get acquainted with the brilliant minds behind Tour Guide. From travel enthusiasts to tech innovators, our team is united by a common goal: making travel accessible, enriching, and tailored to individual desires.</p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px" }}>
                {
                    guide.map(item=>
                        <div key={item._id} >

                            <img src={item.image} style={{width:"300px",height:"300px"}}></img>
                            <h3>{item.name}</h3>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default About;