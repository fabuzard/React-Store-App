import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from '../components/Products'

function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) => setData(response.data)).catch((error) => console.error("Error fetchng data ", error))
    }, [])

    console.log(data)
    return (
        <div className='bg-background-gray px-20 py-4'>
            <section id='top-text ' className='mb-20'>

                <h1 className='font-sans text-2xl'>Shop </h1>
                <p className='max-w-96'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
            <section id='products '>
                <ul className='grid grid-cols-3 gap-y-6'>
                    {data.map(product => (
                        <li key={product.id}>
                            <Products title={product.title} price={product.price} image={product.image} />

                        </li>
                    ))}
                </ul>

            </section>

        </div>
    )
}

export default Home