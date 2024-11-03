import React from 'react'
// import { FaFacebook } from "react-icons/fa";
import Image from 'next/image'

export default function Footer() {
  return (
    <div>
      <footer className='flex flex-col space-y-10 justify-center m-10 mb-0'>
        <nav className='flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700'>
        <a className='hover:text-cyan-500 text-amber-500 ' href="#">Home</a>
        <a className='hover:text-cyan-500 text-amber-500 ' href="#">About</a>
        <a className='hover:text-cyan-500 text-amber-500 ' href="#">Delivery</a>
        <a className='hover:text-cyan-500 text-amber-500 ' href="#">Contact</a>
        </nav>
        <div className='flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105 '>
          <a href="http://facebook.com/" target='blank' rel='nofollow noopener'>
          <Image src={"/images/facebook-new.png"}width={40} height={40} alt="facebook Logo" /></a>

          <a href="http://linkedin.com/" target='blank' rel='nofollow noopener'>
          <Image src={"/images/linkedin.png"}width={40} height={40} alt="Linkedin Logo" /></a>

          <a href="http://instagram.com/" target='blank' rel='nofollow noopener'>
          <Image src={"/images/instagram.png"}width={40} height={40} alt="instagram Logo" /></a>

          <a href="http://twitter.com/" target='blank' rel='nofollow noopener'>
          <Image src={"/images/twitter.png"}width={40} height={40} alt="twitter Logo" /></a>
        </div>
        <p className='text-center hover:text-cyan-600 mb-8 text-amber-400 font-medium '>2024 Muhammad Uzair.All Rights Reserved.</p><br /><br /><br />
      </footer>
    </div>
  )
}
