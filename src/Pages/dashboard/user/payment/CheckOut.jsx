import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useCart from '../../../../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckOut = () => {
const [error,setError]= useState("");
const [transactionId,setTransactionId]= useState('');
const {user} = useAuth()
const [clientSecret,setClientSecret]= useState('')
const stripe = useStripe();
const elements = useElements();
const [axiosSecure] = useAxiosSecure();
const [cart,refetch]= useCart();
const totalPrice1 = cart.reduce((total, item) => total + parseFloat(item.prices), 0);
const totalPrice = parseFloat(totalPrice1)
console.log(totalPrice);

const navigate = useNavigate();



    useEffect(() => {
        if(totalPrice>0){
   
            axiosSecure.post('/create-payment-intent',{
                price:totalPrice
            })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
           }, [axiosSecure,totalPrice])
   
       const handleSubmit = async (event) => {
           event.preventDefault();
           if (!stripe || !elements) {
               return
           }
           const card = elements.getElement(CardElement)
   
           if (card === null) {
               return
           }
           const { error, paymentMethod } = await stripe.createPaymentMethod({
               type: 'card',
               card
           })
           if (error) {
               console.log('payment error', error);
               //console.log(error.message);
               setError(error.message);
           }
           else {
               console.log('payment method', paymentMethod)
               setError('');
               //console.log('');
           }
           //confirm payment  
           const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
               payment_method: {
                   card: card,
                   billing_details: {
                       email: user?.email || 'anonymous@gmail.com',
                       name: user?.displayName || 'anonymous@gmail.com'
                   }
               }
           })
           if (confirmError) {
               console.log('payment con error', confirmError);
               //console.log(error.message);
               setError(error.message);
           }
           else {
               console.log('payment method', paymentIntent)
               setError('');
               if (paymentIntent.status === 'succeeded') {
                   console.log('transaction id', paymentIntent.id);
                   setTransactionId(paymentIntent.id);
                   const payment = {
                       email: user.email,
                       price: totalPrice,
                       transactionId: paymentIntent.id,
                       date: new Date(), // utc date convert. use moment js to 
                       cartIds: cart.map(item => item._id),
                       tourItemId: cart.map(item => item.tourItemId),
                       status: 'pending'
                   }
                   const res = await axiosSecure.post('/payments', payment);
                   console.log('payment saved', res.data);
                   refetch();
                   if (res.data?.paymentResult?.insertedId) {
                     Swal.fire("payment done")
                       }
                       navigate('/dashboard/paymentHistory')
           }
       }
       }
    return (
        <div>
             <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                           
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button style={{ background: 'linear-gradient(to right, #202122, #6a2f41)',color:"#FFFFFF",padding:"10px",border:"none",borderRadius:"5px"}} type="submit" disabled={!stripe || !clientSecret} >
                Pay
            </button>
            <p style={{color:"red"}}>{error}</p>
            {transactionId && <p style={{color:"#202122"}}> Your transaction id: {transactionId}</p>}
        </form> 
        </div>
    );
};

export default CheckOut;