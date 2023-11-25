import React from 'react';
import Banner from '../Home-feature/Banner/Banner';
import TourismGuide from '../Home-feature/Banner/TourismGuide/TourismGuide/TourismGuide';
import TourType from '../Home-feature/Banner/TourType/TourType';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourismGuide></TourismGuide>
            <TourType></TourType>
            
           
        </div>
    );
};

export default Home;