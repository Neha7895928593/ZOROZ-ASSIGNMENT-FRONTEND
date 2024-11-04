// src/CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Create the Cart Context
const CartContext = createContext();

// Initial state for the cart
const initialState = {
    items: [],
};

// Cart reducer function to manage cart actions
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.id),
            };
        case 'CLEAR_CART':
            return {
                ...state,
                items: [],
            };
        default:
            return state;
    }
};

// CartProvider component to wrap around your app
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the Cart Context
export const useCart = () => {
    return useContext(CartContext);
};
