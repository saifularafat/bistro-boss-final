import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../Pages/Provider/AuthProvider';
import useAxiosSecure from '../hook/useAxiosSecure';


const useCart = () => {
    const { user, loading } = useContext(AuthContext);

    // const token = localStorage.getItem('token_access');

    const [ axiosSecure ] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, 
        //     {
        //         headers:{
        //             authorization : `bearer ${token}`
        //         }
        //     })

        //     return res.json();
        // },
        // enabled:!! user?.email && !!localStorage.getItem('token_access')

        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('this is a res AXIOS', res);
            return res.data;
        },
        // enabled: !!user?.email && !!localStorage.getItem('token_access')
    })
    return [cart, refetch];
};

export default useCart;