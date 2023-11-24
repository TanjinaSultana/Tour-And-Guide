import React, { useEffect, useState } from 'react';
import Gallery from './Gallery';
import usePackage from '../../../../../../hooks/usePackage';
import { useParams } from 'react-router-dom';
import ViewDetail from './ViewDetail';
import TourPlan from './TourPlan';

const ViewDetails = () => {
    const [tourPackage,setTourPackage] = useState([])
    const [packages] =usePackage();
    console.log(packages);
    const {_id} = useParams();
    useEffect(() =>{
        const remaining = packages?.find(item => item._id == _id);
        setTourPackage(remaining);
    },[_id,packages])
    console.log(tourPackage);
    
    return (
        <div>
            <Gallery></Gallery>
            <h1>Tour Section</h1>
            <ViewDetail tourPackages={tourPackage}></ViewDetail>
            <h1>Tour Plan</h1>
            <TourPlan></TourPlan>
        </div>
    );
};

export default ViewDetails;