import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; 

const PaymentResult = () => {
    const location = useLocation();
    const { isSuccess } = location.state || { isSuccess: false };

    return (
        <div className="container mx-auto p-5 text-center">
            <div className={`flex flex-col items-center justify-center py-10 ${isSuccess ? 'bg-green-100' : 'bg-red-100'} rounded-lg shadow-lg`}>
                {isSuccess ? (
                    <>
                        <FaCheckCircle className="text-green-500 text-6xl mb-4" />
                        <h1 className="text-3xl font-bold text-green-800">Payment Successful!</h1>
                        <p className="mt-4 text-gray-700">Thank you for your purchase!</p>
                    </>
                ) : (
                    <>
                        <FaTimesCircle className="text-red-500 text-6xl mb-4" />
                        <h1 className="text-3xl font-bold text-red-800">Payment Failed</h1>
                        <p className="mt-4 text-gray-700">Please try again or contact support.</p>
                    </>
                )}
            </div>

            <div className="mt-8">
                <Link to="/" className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300">Return to Home</Link>
                <Link to="/products" className="bg-gray-500 text-white p-3 rounded hover:bg-gray-600 ml-2 transition duration-300">Continue Shopping</Link>
            </div>
        </div>
    );
};

export default PaymentResult;
