import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/cartSlice';

function ProductPage() {
  const [product, setProduct] = useState(null);  // Set initial state to null
  const [loading, setLoading] = useState(true);  // Set loading state to true
  const [error, setError] = useState(null);      // Error state to handle errors
  const { id } = useParams();
  const dispatch = useDispatch();

    const handleAddtoCart = ()=>{
        dispatch(addToCart(product));
        console.log("itworks")
    }

  useEffect(() => {
    // Fetching the product data
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);  // Set product data
      } catch (error) {
        setError("Error fetching data");  // Handle error
      } finally {
        setLoading(false);  // Once data is fetched or error occurs, set loading to false
      }
    };

    fetchProduct();
  }, [id]);  // Re-run the effect whenever the product ID changes

  // Render loading state
  if (loading) return <div>Loading...</div>;

  // Render error state if any
  if (error) return <div>{error}</div>;

  // Render product page once data is available
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex flex-col w-full max-w-4xl space-x-20 lg:flex-row">
        <img
          src={product.image}
          alt="product item"
          className="w-1/3 h-auto object-contain"  
        />
        <span className="flex flex-col justify-start w-1/2 space-y-4 "> 
            <h1 className='text-xl font-inter font-light'>{product.category}</h1>
          <h2 className='text-4xl font-inter font-bold'>{product.title}</h2>
          <p className='font-inter font-extralight text-lg'>{product.description}</p>
          <button onClick={handleAddtoCart} className='bg-black text-white font-inter font-semibold h-10'>Add to cart</button>
        </span>
      </div>
    </div>
  );
  
  
}

export default ProductPage;
