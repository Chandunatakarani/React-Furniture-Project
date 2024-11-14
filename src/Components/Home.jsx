import React from 'react';
import logo from './Images/achieversIT.png';
import Corousel from './Corousel';
import './Corousel.css'
import Cards from './Cards';
import Discount from './Discount';
import Newarrivals from './Newarrivals';
import Bestsales from './Bestsales';
const Home = () => {
  return (
    <div>
   <div className="container shadow-lg">
    <div className="row">
      <div className="col-6">
        <img src={logo} alt="logo" />
      </div>
      <div className="col-6">
        <div className="row mt-4" >
       <div className="col-2">Home</div>
       <div className="col-2">Shop</div>  
       <div className="col-2">Cart
       <i className="fa fa-user user-profile"></i>
       <i className="fa fa-cart-plus cart-symbol"></i>       
       </div>
       </div>
      </div>
    </div>
   </div>
   <Corousel />
   <div className="carousel-data">
    <h3>50% Off For Your<br /> First Shopping</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Quis lobortis consequat eu, quam etiam at quis ut<br /> convallis</p>
   </div>
   <Cards />
   <Discount />
   <Newarrivals />
   <Bestsales />
   </div>
  )
}

export default Home