import React from 'react'
import vector from '../assets/Vector.svg'
function Navbar() {
  return (
    <div className='px-20 py-2  flex justify-between align-middle'>
      <h1 className='font-inter font-bold text-xl'>Website</h1>
      <div className='flex my-auto space-x-1'>

        <p>1</p>
        <img src={vector} alt="" srcset="" />
      </div>

    </div>
  )
}

export default Navbar