import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = useAuth()
    const {refetch, data: cart = []} = useQuery({
        queryKey : ['cart',user?.email],
        queryFn : async () =>{
            const res = await axiosSecure.get(`/cart?email=${user?.email}`)
            return res.data;
        }
    })
    return [cart,refetch ]
};

export default useCart;