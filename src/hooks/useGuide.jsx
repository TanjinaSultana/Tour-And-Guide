import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useGuide = () => {
    const axiosPublic = useAxiosPublic();
    const {data: guide = [],isPending: loading,refetch} =useQuery({
        queryKey : ['guide'],
        queryFn : async() =>{
            const res = await axiosPublic.get('/guide')
            return res.data;
            
        }
    })
    return [guide,loading,refetch]
};

export default useGuide;