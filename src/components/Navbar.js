import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; 
import { FaShoppingCart } from 'react-icons/fa'; 

const Navbar = () => {
    const { state } = useCart(); 

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link to="/" className="text-white font-bold">Home</Link>
                    <Link to="/products" className="text-white ml-4">Products</Link>
                </div>
                <Link to="/checkout" className="text-white flex items-center">
                    <FaShoppingCart className="mr-2" /> 
                    <span>Cart</span>
                    {state.items.length > 0 && (
                        <span className="ml-2 bg-red-500 text-white rounded-full px-2 text-sm">
                            {state.items.length} 
                        </span>
                    )}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
