import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductListing from './pages/ProductListingPage';
import ProductDetail from './pages/productDetail';
import Checkout from './pages/Checkout';
import PaymentResult from './pages/PaymentResult';
import './App.css'
import CategoryProducts from './pages/CategoryProducts';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductListing />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/products/category/:category" element={<CategoryProducts/>} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment-result" element={<PaymentResult />} />
            </Routes>
        </Router>
    );
};

export default App;
