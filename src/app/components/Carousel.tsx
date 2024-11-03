import React from 'react'
import Image from 'next/image'

export default function Carousel() {
  return (
    <div className=''>
      <section className='bg-gradient-to-r from-black to-gray-700'>
        <div className=' py-4 px-2 mx-auto mx-w-screen-xl sm:py-4 lg:px-6'>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
            <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col'>

              <a href=""
                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow '>
                <Image src={"/images/Salami-pizza.jpg"}width={1000} height={1000} alt="image-1"
                  className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
                />
                <div className='inset-0 absolute '>
                </div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Oregano Pizza{""}</h3>
              </a>
            </div>

            <div className='col-span-2 sm:col-span-2 md:col-span-2 bg-gradient-to-r from-black to-gray-700 '>
              <a href=""
                className='flex flex-col group relative overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4'
              >
                <Image src={"/images/italian.jpg"}width={1000} height={1000}
                  alt="image-6"
                  className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
                />
                <div className='inset-0 absolute '>
                </div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Italian Cuisine Pizza</h3>
              </a>


              <div className='grid gap-4 grid-cols-2 overflow-hidden rounded-lg px-4  pb-4  object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'>
                <a href=""
                  className='flex flex-col group relative overflow-hidden rounded-lg px-4 pb-4  mb-4'
                >
                  <Image src={"/images/supreme.jpg"}width={1000} height={1000}
                    alt="burger-3"
                    className='absolute inset-0 object-cover h-full w-full group-hover:scale-105 transition-transform duration-500 ease-in-out'
                  />
                  <div className='inset-0 absolute '>
                  </div>
                  <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Viggie Pizza</h3>
                </a>


                <a href=""
                  className='flex flex-col group relative overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4'>
                  <Image src={"/images/suprem.jpg"}width={1000} height={1000}
                    alt="burger-4"
                    className='absolute inset-0 object-cover h-full w-full group-hover:scale-105 transition-transform duration-500 ease-in-out'
                  />
                  <div className='inset-0 absolute '>
                  </div>
                  <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Supreme Pizza{""}</h3>

                </a>
              </div>
            </div>


            <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-gray-400 h-auto md:h-full flex flex-col'>
              <a href=""
              className='group relative flex flex-col overflow-hidden rounded-lg px-4 pt-40 flex-grow'>
                    <Image src={"/images/bbq-chicke.jpg"}width={1000} height={1000}
                     alt="burger-5"
                     className='inset-0 absolute h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out-'/>
                <div className='inset-0 absolute '>
                  </div>
                  <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>BBQ Chicken Pizza</h3>
              </a>
            </div>



          </div>
        </div>
      </section>
    </div>
  )
}
