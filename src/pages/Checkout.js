import React from 'react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { state, dispatch } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
    
        navigate('/payment-result'); 
    };

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' }); 
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold">Checkout</h1>
            {state.items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="mt-4">
                        {state.items.map((item) => (
                            <li key={item.id} className="flex justify-between p-2 border-b">
                                <span>{item.name}</span>
                                <span>₹{item.price.toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between mt-4">
                        <h2 className="text-xl font-bold">Total ₹{state.items.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</h2>
                        <div>
                            <button onClick={handleCheckout} className="bg-blue-500 text-white p-2 rounded">Proceed to Payment</button>
                            <button onClick={handleClearCart} className="bg-red-500 text-white p-2 rounded ml-2">Clear Cart</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Checkout;
