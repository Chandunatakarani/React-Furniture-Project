import React, { useEffect, useState } from 'react';
import { discoutProducts } from './Product';

const Discount = () => {
    const[discount,setdiscount]=useState([])
   useEffect(()=>{
    setdiscount(discoutProducts)
    
   },[])
   console.log(discount);
    
  return (
    <div>

    </div>
  )
}

export default Discount