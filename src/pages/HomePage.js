import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                const uniqueCategories = [...new Set(response.data.map(item => item.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Error fetching from local server:', error);
                setError('Failed to load categories from local server. Trying remote server...');

                try {
                    const response = await axios.get('https://zoroz-assignment-backend.onrender.com/api/products');
                    const uniqueCategories = [...new Set(response.data.map(item => item.category))];
                    setCategories(uniqueCategories);
                } catch (error) {
                    console.error('Error fetching from remote server:', error);
                    setError('Failed to load categories from remote server. Please try again later.');
                }
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold">Welcome to Our E-Commerce Store</h1>
            <h2 className="text-2xl mt-4">Browse by Categories:</h2>
            {error && <div className="text-red-500 mt-2">{error}</div>} 
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category, index) => (
                    <Link to={`/products/category/${category}`} key={index} className="border rounded-lg p-4 text-center hover:bg-gray-100">
                        <h3 className="text-lg font-semibold">{category}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
