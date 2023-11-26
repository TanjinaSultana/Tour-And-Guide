import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useAccept = () =>{
    const {user,loading} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const {data : isAccept,isPending: isAcceptLoading} = useQuery({
        queryKey : [user?.email,'isAccepted'],
        enabled : !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/cart/accept/${user?.email}`);
            return res.data?.accept;
        }
    })
    return [isAccept,isAcceptLoading]
};
export default useAccept;