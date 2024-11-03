"use client"
 
import React from 'react'

 type Offer = {
  title: string,
  description : string
};

const specialOffers:React.FC=()=>{
const offers : Offer [] = [{
  title : "Happy Hour",
  description: "5PM se 7PM tk tammam drinks par 50% off hasil kren "
},{
  title : "Family Mele Deal",
  description: "2 main cources order kren aur family deal coupon code hasil Kren"
},{
  title : "Weekely Brunch",
  description: "Eq free coumplimentry drink ka lutf utaen"
}
]
const handleOfferClick = (description : string) =>{
  alert(description);
}
return(
<section className='py-10 '>
<div className='container mx-auto text-center'>
  <h2 className='text-4xl font-bold md-6 text-white'>Special Offers</h2>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
  {offers.map((offers,index)=>(
<button key={index}
 onClick={() => handleOfferClick(offers.description)}
  className='bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105'>
    <h3 className='text-2xl font-bold text-red-700'>
    {offers.title}
  </h3>
  <p className='text-slate-700 mt-3'>{offers.description}</p>
  </button>
  ))}
  </div>
</div>
</section>
)
}

export default specialOffers ; 