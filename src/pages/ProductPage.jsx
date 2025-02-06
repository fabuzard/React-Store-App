import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/cartSlice";
import LoadingSpinner from "../components/loadingSpinner";
import { Link } from "react-router-dom";

function ProductPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleAddtoCart = () => {
    dispatch(addToCart(product));
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
      <div className="flex justify-center">
        <LoadingSpinner />
      </div>
    );

  if (error) return <div className="text-center">{error}</div>;

  return (
    <div className="flex flex-col items-center text-center mt-20 px-4 w-full">
      <div className="w-full flex justify-start max-w-4xl">
        <Link
          to={`/`}
          className="inline-flex items-center border border-black px-3 py-1.5 rounded-md text-black hover:bg-indigo-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
          <span className="ml-1 font-bold text-lg">Back</span>
        </Link>
      </div>
      <div className="flex flex-col w-full max-w-4xl space-y-10 lg:flex-row lg:space-x-10 items-center">
        <img
          src={product.image}
          alt="product item"
          className="w-1/2 h-auto object-contain max-w-xs"
        />
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start w-full lg:w-1/2 space-y-4">
          <h1 className="text-xl font-inter font-light">{product.category}</h1>
          <h2 className="text-4xl font-inter font-bold">{product.title}</h2>
          <p className="font-inter font-extralight text-lg px-2">
            {product.description}
          </p>
          <button
            onClick={handleAddtoCart}
            className="bg-black text-white font-inter font-semibold py-2 px-8 rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
