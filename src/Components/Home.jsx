import React from 'react';
import logo from './Images/achieversIT.png'
const Home = () => {
  return (
    <div>
   <div className="container shadow-lg">
    <div className="row">
      <div className="col-6">
        <img src={logo} alt="logo" />
      </div>
      <div className="col-6">
        <div className="row  text text-center mt-4" >
       <div className="col-2">Home</div>
       <div className="col-2">Shop</div>
       <div className="col-2">Cart</div>
       </div>


      </div>
    </div>
   </div>
    </div>
  )
}

export default Home