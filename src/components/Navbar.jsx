import React from 'react'
import vector from '../assets/Vector.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Navbar() {
  const items = useSelector((state)=>state.cart.items.length)
  return (
    <div className='px-20 py-2  flex justify-between align-middle'>
      <h1 className='font-inter font-bold text-xl'>Website</h1>
      <div className='flex my-auto space-x-1'>

        <p>{items}</p>
        <Link to={`/checkout`}> 
        <img src={vector} alt="" srcset="" />
        </Link>
      </div>

    </div>
  )
}

export default Navbar