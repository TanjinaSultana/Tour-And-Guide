import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useReject = () =>{
    const {user,loading} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const {data : isReject,isPending: isRejectLoading} = useQuery({
        queryKey : [user?.email,'isReject'],
        enabled : !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/cart/reject/${user?.email}`);
            return res.data?.reject;
        }
    })
    return [isReject,isRejectLoading]
};
export default useReject;