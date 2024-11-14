import React, { useEffect, useState } from 'react';
import { bestsales } from './Product';

const Bestsales = () => {
    const[sales,setsales]=useState([])
    useEffect(()=>{
        setsales(bestsales)
    },[])
    console.log(sales)
  return (
    <div>
        <h1 className='text-center text-success'> Best Sales</h1>
    </div>
  )
}

export default Bestsales