import React from 'react'
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaPizzaSlice } from "react-icons/fa";
export default function Navbar() {
  return (
    <div>

      <div className='grid xl:grid-cols-1 grid-cols-1 '>
        <div className='p-5'>
          <div className='py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-800'>
            <div className='flex justify-between items-center'>
              <div className='flex justify-center items-center gap-2'>

                {/* logo  */}
                < FaPizzaSlice  className='w-10 h-10 rounded-full text-yellow-400   ring-lime-400'/>
                {/* <Image src={""} alt='' /> */}
              
                {/* // search icon */}
                <div style={{ position: 'relative'}}>
                  <input
                    placeholder='Search'
                    className='rounded-3xl py-3  px-3 outline-none text-black w-[350px] pr-10 hidden lg:block md:block ' />

                  <FaSearch className='w-5 h-5 text-lime-300 absolute right-3 top-1/3 transform-translate-y-1/2 hidden lg:block md:block' />

                </div>
              </div>


            <div className='flex justify-center items-center gap-2 '>
            <MdElectricBolt className='h-5 w-5  text-amber-400 hidden lg:block md:block '/>
            <p className='text-sm text-white hidden lg:block md:block'>Order Now And Get It With 

            <span className='text-amber-400 '> 15 minutes</span>
            </p>

            {/* cart icon  */}
            <FaCartShopping className='w-8 h-8 rounded-full ring-2 p-1  relative hover:bg-amber-400 text-cyan-400' />


          <Image src={"/images/mypicture.jpg"} alt="userAfter" width={1000} height={1000}
          className='w-9 h-9 inline-block ring-2 ring-sky-400 hover:bg-amber-400 rounded-full' />
            
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
