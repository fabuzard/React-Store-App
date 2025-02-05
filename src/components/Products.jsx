import React from 'react'
import { Link } from 'react-router-dom'
function Products({ title, price, image,productId }) {
    return (
        <div className='flex flex-col items-center'>
            
              <Link to={`/product/${productId}`}> 
            <img src={image} alt="" className='w-48 h-48 object-scale-down bg-white drop-shadow-lg rounded-lg p-4' />
            <h1 className='font-sans font-bold truncate max-w-48'>
                {title}

            </h1>
            <p className='font-sans font-light'>

                ${price}
            </p>
                                        </Link>
        </div>

    )
}

export default Products