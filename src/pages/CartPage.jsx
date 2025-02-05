import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../components/cartSelector";
import { addToCart, removeCart } from "../components/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function CartPage() {
  const totalPrice = useSelector(selectTotalPrice);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleRemoveQty = (product) => {
    dispatch(removeCart(product));
  };
  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20 text-xl font-semibold">
        Your cart is empty
        <p className="mt-10">Explore our products</p>
        <Link to={"/"}>
        <button className="text-2xl font-bold mt-4 bg-slate-400 p-4 rounded-lg hover:bg-slate-100 hover:text-gray-800">EXPLORE</button>
        </Link>
      </div>
    );
  }

  return (
    <section className="flex justify-center">
      <div className="mx-40 mt-24 border-2 border-stone-900 p-6 max-w-2xl bg-white shadow-lg rounded-lg">
        <p className="font-inter text-2xl my-6 font-bold text-center">
          Thank you for purchasing at Website
        </p>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex space-x-6 items-center border-b pb-4"
            >
              <img
                className="w-24 h-36 object-scale-down rounded"
                src={item.image}
                alt={item.title}
              />

              <div className="flex-1 space-y-2">
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <p className="text-gray-600">Qty: {item.quantity}</p>
                <div className="flex-row space-x-2">
                  <button
                    onClick={() => handleAddtoCart(item)}
                    className="px-3 py-1 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition"
                  >
                    +
                  </button>

                  <button
                    onClick={() => handleRemoveQty(item)}
                    className="px-3 py-1 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition"
                  >
                    -
                  </button>
                </div>
              </div>

              <div className="text-lg font-bold text-stone-900">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div>
          <p>Total: ${totalPrice.toFixed(2)}</p>
          <button>Pay</button>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
