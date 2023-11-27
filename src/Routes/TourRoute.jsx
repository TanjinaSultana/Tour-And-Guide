/* eslint-disable react/prop-types */
import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useTourGuide from '../hooks/useTourGuide';

const TourRoute = ({children}) => {
    const {user,loading} = useAuth();
    const [isTourGuide,isTourGuideLoading] = useTourGuide();
    const location = useLocation();
   if(loading || isTourGuideLoading){
    return <h1>Loading</h1>
   }
   if(user && isTourGuide){
    return children;
   }
   return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default TourRoute;