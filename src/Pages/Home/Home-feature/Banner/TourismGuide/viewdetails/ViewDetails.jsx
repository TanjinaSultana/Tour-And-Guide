import React, { useEffect, useState } from 'react';

import usePackage from '../../../../../../hooks/usePackage';
import { useParams } from 'react-router-dom';
import ViewDetail from './ViewDetail';
import TourPlan from './TourPlan';
import TourGuides from '../TourGuide/TourGuides';
import Booking from '../Booking/Booking';
import Gallery from './Gallery';

const ViewDetails = () => {
    const [tourPackage,setTourPackage] = useState("")
    const [packages] =usePackage();
    const {id} = useParams();
    useEffect(() =>{
        const remaining = packages?.find(item => item._id == id);
        //setTourPackage(remaining);
        setTourPackage(remaining);
      
    },[id,packages])
    
    
    return (
        <div>
            <Gallery gallery={tourPackage} ></Gallery>
            <h1 >Tour Section</h1>
            <ViewDetail tourPackages={tourPackage}></ViewDetail>
            <h1>Tour Plan</h1>
            <TourPlan tour={tourPackage}></TourPlan>
            <h1>Tour Guides</h1>
            <TourGuides></TourGuides>
            <h1>Booking</h1>
            <Booking tour={tourPackage}></Booking>
        </div>
    );
};

export default ViewDetails;