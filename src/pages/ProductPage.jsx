import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/cartSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";

function ProductPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleAddtoCart = () => {
    dispatch(addToCart(product));
    console.log(product)
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );

  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="flex flex-col items-center text-center mt-16 px-4 w-full">
      {/* Back Button */}
      <div className="w-full max-w-5xl lg:flex">
        <Link
          to={`/`}
          className="inline-flex items-center border border-gray-400 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
          <span className="ml-2 font-semibold text-lg">Back</span>
        </Link>
      </div>

      {/* Product Content */}
      <div className="flex flex-col lg:flex-row items-center w-full max-w-5xl mt-8 space-y-8 lg:space-x-12 lg:space-y-0">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-auto object-contain rounded-lg shadow-lg bg-gray-100 p-4"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start w-full lg:w-1/2 space-y-4">
          <span className="text-sm uppercase tracking-wider text-gray-500">
            {product.category}
          </span>
          <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed px-2 lg:px-0">
            {product.description}
          </p>
          <span className="text-2xl font-semibold text-indigo-600">
            ${product.price}
          </span>
          <button
            onClick={handleAddtoCart}
            className="bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out"
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
