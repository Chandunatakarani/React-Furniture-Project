import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/achieversIT.png';
import './Corousel.css'
const Header = () => {
  return (
    <div>
        <div className="container shadow-lg">
    <div className="row">
      <div className="col-6">
        <img src={logo} alt="logo" />
      </div>
      <div className="col-6">
        <div className="row mt-4" >
       <div className="col-2 navbar-links">
        <Link to="/" className="no-underline-link">Home</Link>
        </div>
      <div className="col-2 navbar-links">
        <Link to="/products/:category/:id">
        Shop
        </Link>
        </div>
       <div className="col-2">
       <Link to="/Cart">
        Cart
        </Link>
       <i className="fa fa-user user-profile"></i>
       <i className="fa fa-cart-plus cart-symbol"></i>       
       </div>
       </div>
      </div>
    </div>
   </div>
    </div>
  )
}

export default Header