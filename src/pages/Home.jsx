import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from '../components/Products';

function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((response) => setProducts(response.data))
            .catch((error) => setError("Failed to load products"))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="bg-gray-50 px-6 lg:px-20 py-10 min-h-screen">
            {/* Intro Section */}
            <section id="top-text" className="mb-12 text-center lg:text-left">
                <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
                <p className="max-w-lg text-gray-600 mt-2">
                    Discover the latest trends and must-have items. Find what suits your style today!
                </p>
            </section>

            {/* Loading & Error Handling */}
            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <p className="text-gray-700 text-lg">Loading products...</p>
                </div>
            ) : error ? (
                <div className="text-center text-red-500">{error}</div>
            ) : (
                // Products Section
                <section id="products">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <li key={product.id} className="flex justify-center">
                                <Products 
                                    title={product.title} 
                                    price={product.price} 
                                    image={product.image} 
                                    productId={product.id} 
                                />
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}

export default Home;
