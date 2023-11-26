import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useWish = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = useAuth()
    const {refetch, data: wish = []} = useQuery({
        queryKey : ['wish',user?.email],
        queryFn : async () =>{
            const res = await axiosSecure.get(`/wish?email=${user?.email}`)
            return res.data;
        }
    })
    return [wish,refetch ]
};

export default useWish;