import React from 'react';
import { Link } from 'react-router-dom';

function Products({ title, price, image, productId, imgClassName = "" }) {
    return (
        <Link 
            to={`/product/${productId}`} 
            className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 w-64 hover:scale-105 transition-transform duration-300"
        >
            <img 
                src={image} 
                alt={title} 
                className={`w-48 h-48 object-scale-down bg-gray-100 rounded-lg p-3 ${imgClassName}`}
            />
            <h1 className="font-sans font-bold text-center text-gray-900 mt-3 truncate max-w-48">
                {title}
            </h1>
            <p className="font-sans font-medium text-gray-700 mt-1 text-lg">
                ${price.toFixed(2)}
            </p>
        </Link>
    );
}


export default Products;
