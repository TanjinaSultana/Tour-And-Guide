import React, { useEffect, useState } from 'react';

import usePackage from '../../../../../../hooks/usePackage';
import { useParams } from 'react-router-dom';
import ViewDetail from './ViewDetail';
import TourPlan from './TourPlan';
import TourGuides from '../TourGuide/TourGuides';
import Booking from '../Booking/Booking';

const ViewDetails = () => {
    const [tourPackage,setTourPackage] = useState([])
    const [packages] =usePackage();
    console.log(packages);
    const {id} = useParams();
    useEffect(() =>{
        const remaining = packages?.find(item => item._id == id);
        //setTourPackage(remaining);
        setTourPackage(remaining);
      
    },[id,packages])
    console.log(tourPackage);
    
    return (
        <div>
            {/* <Gallery></Gallery> */}
            <h1>Tour Section</h1>
            <ViewDetail tourPackages={tourPackage}></ViewDetail>
            <h1>Tour Plan</h1>
            <TourPlan></TourPlan>
            <h1>Tour Guides</h1>
            <TourGuides></TourGuides>
            <h1>Booking</h1>
            <Booking></Booking>
        </div>
    );
};

export default ViewDetails;