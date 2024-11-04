import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../CartContext'; 

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { dispatch } = useCart(); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);
            setProduct(response.data);
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product }); 
        navigate('/checkout'); 
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <img src={product.image} alt={product.name} className="w-full h-96 object-contain rounded mt-4" />
            <p className="text-xl font-bold">{product.price.toFixed(2)}</p>
            <p className="mt-2">{product.description}</p>
            <button onClick={handleAddToCart} className="bg-blue-500 text-white p-2 rounded mt-4">Add to Cart & Checkout</button>
        </div>
    );
};

export default ProductDetail;
