import React from 'react';
import Corousel from './Corousel';
import './Corousel.css'
import Cards from './Cards';
import Discount from './Discount';
import Newarrivals from './Newarrivals';
import Bestsales from './Bestsales';
import Footer from './Footer';
import Header from './Header';
const Home = () => {
  return (
    <div>
      <Header/>
   <Corousel />
   <div className="carousel-data">
    <h3>50% Off For Your<br /> First Shopping</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Quis lobortis consequat eu, quam etiam at quis ut<br /> convallis</p>
   </div>
   <Cards />
   <Discount />
   <Newarrivals />
   <Bestsales />
   <Footer />
   </div>
  )
}

export default Home