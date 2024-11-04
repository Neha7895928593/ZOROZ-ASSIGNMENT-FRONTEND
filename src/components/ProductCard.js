import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4">
      <img src={product.image} alt={product.name} />
      <h2 className="font-bold">{product.name}</h2>
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`} className="text-blue-500">View Details</Link>
    </div>
  );
};

export default ProductCard;
