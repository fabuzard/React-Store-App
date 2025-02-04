import React from 'react'
import { Link } from 'react-router-dom'
function Products({ title, price, image,productId }) {
    return (
        <div className='flex flex-col items-center'>
              <Link to={`/product/${productId}`}> 
            <img src={image} alt="" className='w-40 h-40 object-scale-down bg-white drop-shadow-lg rounded-lg' />
            <h1 className='font-sans font-bold truncate max-w-36'>
                {title}

            </h1>
            <p>

                ${price}
            </p>
                                        </Link>
        </div>

    )
}

export default Products