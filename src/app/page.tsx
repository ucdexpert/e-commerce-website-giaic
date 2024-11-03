 import React from 'react'
 import Navbar from '../app/components/Navbar'
import Banner from './components/Banner'
import Card from './components/Card'
import Carousel from './components/Carousel'
import Menuitem from'./components/Menuitem'
import Footer from './components/Footer'
import Offer from './components/Offer'
import ProductList from './components/ProductList'
import Progressor from './components/Progressor'
 
import Reservation from './components/Reservation'


 export default function App() {
   return (
     <div className=' bg-gradient-to-r from-black to-slate-700 min-h-screen '>

  <Navbar/>
  <Carousel/>
   <Progressor/>
  <ProductList/>
  <Banner/>
  <ProductList/>
  <Menuitem/>
  <Offer/>
  <Card/>
  <Reservation/>
  <Footer/> 
     </div>
   )
 }
 