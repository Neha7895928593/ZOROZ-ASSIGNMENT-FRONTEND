import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get('http://localhost:5000/api/products');
            
            const uniqueCategories = [...new Set(response.data.map(item => item.category))];
            setCategories(uniqueCategories);
        };
        fetchCategories();
    }, []);

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold">Welcome to Our E-Commerce Store</h1>
            <h2 className="text-2xl mt-4">Browse by Categories:</h2>
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
