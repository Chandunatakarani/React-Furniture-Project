import React from 'react'
import Header from '../Components/Header';
import { useSelector } from 'react-redux';
const Cart = () => {
  const cartdata=useSelector((state)=>state.productdata.cartdata)
console.log(cartdata);

  return (
    <div>
 <Header />
<h1>cart</h1>
    </div>
  )
}

export default Cart