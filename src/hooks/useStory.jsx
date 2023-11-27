import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useStory = () => {
    const axiosPublic = useAxiosPublic();
    const {data: story = [],isPending: loading,refetch} =useQuery({
        queryKey : ['story'],
        queryFn : async() =>{
            const res = await axiosPublic.get('/story')
            return res.data;
            
        }
    })
    return [story,loading,refetch]
};

export default useStory;