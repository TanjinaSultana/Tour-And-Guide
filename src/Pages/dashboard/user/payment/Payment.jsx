import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOut from './CheckOut';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div style={{marginTop:"70px"}}>
            <Elements stripe={stripePromise}>
                <CheckOut></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;