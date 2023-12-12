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
            
          <div  className="custom-slider grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4" >
          
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