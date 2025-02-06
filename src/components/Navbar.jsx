import React from 'react'
import vector from '../assets/Vector.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import homeLogo from "../assets/home.svg"
function Navbar() {
  const items = useSelector((state)=>state.cart.items.length)
  return (
    <div className="w-full px-8 md:px-20 py-4 flex justify-between items-center bg-white shadow-md">
    <h1 className="font-inter font-bold text-xl cursor-default">Website</h1>
    
    <Link to={`/`} className="flex items-center space-x-2 hover:text-gray-500 transition duration-300">
      <img src={homeLogo} alt="Home" className="w-5 h-5" />
      <p className="font-bold text-xl">Home</p>
    </Link>
  
    <div className="flex items-center space-x-4">
        <Link to={`/checkout`}>
      <button className="bg-black text-white px-4 py-1 rounded-md hover:bg-gray-800 transition duration-300">
        Checkout
      </button>
        </Link>
      <div className="flex items-center space-x-2">
        <p className="font-bold">{items}</p>
          <img src={vector} alt="Cart" className="w-6 h-6" />
      </div>
    </div>
  </div>
  
  )
}

export default Navbar


