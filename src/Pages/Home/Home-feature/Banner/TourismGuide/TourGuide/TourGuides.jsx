import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import useGuide from '../../../../../../hooks/useGuide';
import TourGuide from './TourGuide';
import './TourGuide.css'



const TourGuides = () => {
   const [guide] = useGuide();
 
    return (
        <div style={{backgroundColor:"#FFFFFF"}} className="sliderContainer">
            
          <div style={{ display: 'grid', gridTemplateColumns: "repeat(3, 1fr)" , gridGap: '20px',padding:"30px" }} className="customSlider">
          
             {guide.map((item) => (
            <TourGuide 
            key={item._id}
            items={item} />
        ))}
          </div>
   

        </div>
    );
};

export default TourGuides;