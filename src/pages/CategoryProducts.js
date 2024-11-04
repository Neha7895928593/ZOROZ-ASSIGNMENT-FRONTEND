import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../CartContext';

const CategoryProducts = () => {
    const { category } = useParams(); 
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null); 
    const { dispatch } = useCart(); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategoryProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/category/${category}`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching category products from local server:', error);
                setError('Failed to load products from local server. Trying remote server...');

                try {
                    const response = await axios.get(`https://zoroz-assignment-backend.onrender.com/api/products/category/${category}`);
                    setProducts(response.data);
                } catch (error) {
                    console.error('Error fetching category products from remote server:', error);
                    setError('Failed to load products from remote server. Please try again later.');
                }
            }
        };

        fetchCategoryProducts();
    }, [category]); 
    
    const handleAddToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product }); 
        navigate('/checkout'); 
    };

    return (
        <div className="container mx-auto p-5">
            <h2 className="text-3xl font-bold">{category} Products</h2>
            {error && <div className="text-red-500 mt-2">{error}</div>} 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="border rounded-lg p-4">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-contain rounded mt-4" />
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-xl font-bold">₹ {product.price.toFixed(2)}</p>
                            <Link to={`/products/${product.id}`} className="bg-blue-500 text-white p-2 rounded mt-2 inline-block">View Details</Link>
                            <button onClick={() => handleAddToCart(product)} className="bg-green-500 text-white p-2 rounded mt-2 inline-block">Add to Cart & Checkout</button>
                        </div>
                    ))
                ) : (
                    <p>No products available in this category.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryProducts;
