import React from 'react'

export default function Progressor() {
  return (
    <div>

      <div className='flex items-start max-w-screen-lg w-full mx-auto mt-10'>
        <div className='w-full'>
          <div className='flex items-center w-full'>
          
          <div className='w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full'>
            <span className='text-base text-white font-bold'>
              1
            </span>
          </div>
         
          <div className='w-full mx-4 rounded-lg bg-cyan-500 '>
            <hr className='w-full mx-25 rounded-lg bg-cyan-500' />
          </div>
          </div>
        <div className='mt-2 mr-4'>
          <h6 className='text-base font-bold text-amber-500'>Step 1 : Choose Your Dish</h6>
        <p className='test-xs text-white '>Explore Our Delicious Menu And Select Your Favrite Male </p>
        </div>
        
        </div>

          <div className='w-full'>
          <div className='flex items-center w-full'>
          
          <div className='w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full'>
            <span className='text-base text-white font-bold'>
              2
            </span>
          </div>
         
          <div className='w-full mx-4 rounded-lg bg-cyan-500 '>
          </div>
          </div>
        <div className='mt-2 mr-4'>
          <h6 className='text-base font-bold text-amber-500'>Step 2 : Customize Your Order</h6>
        <p className='test-xs text-white '>Tailor your meal to your taste! </p>

        </div>
        
        </div>

        <div className='w-full'>
          <div className='flex items-center w-full'>
          
          <div className='w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full'>
            <span className='text-base text-white font-bold'>
              3
            </span>
          </div>
         
          <div className='w-full mx-4 rounded-lg bg-cyan-500 '>
          </div>
          </div>
        <div className='mt-2 mr-4'>
          <h6 className='text-base font-bold text-amber-500'>Step 3 : Place Your Order</h6>
        <p className='test-xs text-white '>Ready to eat? Proceed to chech out and complete your order! </p>

        </div>
        
        </div>
       
      </div>
    </div>
  )
}
