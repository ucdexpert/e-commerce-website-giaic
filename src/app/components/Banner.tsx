import React from 'react'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-7 '>
      <div className='absolute inset-0 opacity-20'>
        <Image src={"/images/pizzaBanner.jpg"}width={1000} height={1000} alt="pizza Image"
        className='h-full w-full object-cover' />
      </div>
      <div className='relative z-10 mx-auto flex flex-col justify-center items-center '>
        <h2 className='text-white sm:text-5xl font-bold mb-4 '>Discover Our Menu</h2>
        <p className='text-white text-lg text-center mb-6 max-w-xl '>Indulge in our offerings and elevate your dining experience. 
          <br /> Shop Now For Exclusive Pizza Discount!</p>
        <button type='button' className='bg-cyan-500 text-white text-sm font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-500 '>Exciting Deals Launch At 12 PM!</button>
      </div>
    </div>

  )
}
