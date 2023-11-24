import React from 'react';
import Banner from '../Home-feature/Banner/Banner';
import TourismGuide from '../Home-feature/Banner/TourismGuide/TourismGuide/TourismGuide';
import Login from '../../authentication/login/Login';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourismGuide></TourismGuide>
           
        </div>
    );
};

export default Home;