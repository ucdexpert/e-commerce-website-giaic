import React from 'react'
import Image from 'next/image'
const FloatingImageContentBlock = () => {
  return (
    <section className='container m-auto py-10 flex flex-col md:flex-row items-center'>
      <div className='md:w-1/2 md:pr-10'>
        <h2 className='text-3xl font-bold mb-4 text-white'>Delicious Pizza</h2>
        <p className='text-white mb-4'>Exprience the juiciest pizza in town, made with fresh ingredients andgrilled to perfection</p>
        <button className='bg bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transtion duration-200'>Order Now</button>
        <h3 className='text-2xl font-semibold mt-6  mb-2 text-center text-white'>Coming Soon Our New Pizza Lounches </h3>
        <ul className='text-white'>
          <li >
            <strong>Cheesy BBQ Pizza:</strong>  A mountwatering blend of cheddar cheese, crispy bacon, and BBQ.
          </li>
          <br /><li>
            <strong>Spicy  Chicken Pizza </strong> A mouthwatering blend of cjeddar cjeeze,
            crospy bacon, and BBQ
          </li>
          <br />
          <li>
            <strong>Spicy Jalapeno Pizza</strong> A fiery deligt topped with fresh jalapenos and zesty chipotle mayo.
          </li>
          <br /><li>
            <strong>Mushroom swiss Pizza</strong> Juicy beef patty melated swiss cheese for a rich, savory test.
          </li>
          <br />
        </ul>
        </div>
        <div className='md:w-1/2 mt-6 md:mt-0  '>
        <Image 
        className='w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7 '
         src={"/images/p.jpg"}width={1000} height={1000} alt="pizza" />;
        </div>

   
    </section>
  )
}
export default FloatingImageContentBlock