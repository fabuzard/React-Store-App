import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";
import Products from "./Products";

import homeLogo from "../assets/home.svg";
import cartIcon from "../assets/Vector.svg";

function Navbar() {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropDown] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const itemsCount = cartItems.length;

  function handleDropDown() {
    setShowDropDown(!showDropdown);
  }

  function handleClear() {
    dispatch(clearCart());
  }

  return (
    <div className="w-full px-8 md:px-20 py-4 flex justify-between items-center bg-white shadow-md">
      {/* Website Title */}
      <h1 className="font-inter font-bold text-xl cursor-default">Website</h1>

      {/* Home Button */}
      <Link to="/" className="flex items-center space-x-2 hover:text-gray-500 transition duration-300">
        <img src={homeLogo} alt="Home" className="w-5 h-5" />
        <p className="font-bold text-xl">Home</p>
      </Link>

      {/* Shopping Cart & Checkout */}
      <div className="flex items-center space-x-4">
        <Link to="/checkout">
          <button className="bg-black text-white px-4 py-1 rounded-md hover:bg-gray-800 transition duration-300">
            Checkout
          </button>
        </Link>

        {/* Cart Dropdown */}
        <div className="relative">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={handleDropDown}>
            <p className="font-bold">{itemsCount}</p>
            <img src={cartIcon} alt="Cart" className="w-6 h-6" />
          </div>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              {itemsCount === 0 ? (
                <p className="text-center py-4 text-gray-500">Cart is empty</p>
              ) : (
                <div className="p-2">
                  {cartItems.map((item) => (
                    <Products
                      key={item.id}
                      title={item.title}
                      price={item.price}
                      image={item.image}
                      productId={item.id}
                      imgClassName="w-12 h-12"
                    />
                  ))}
                  <button
                    onClick={handleClear}
                    className="w-full bg-red-500 text-white py-2 mt-2 rounded-md hover:bg-red-600 transition duration-300"
                  >
                    Clear Cart
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
