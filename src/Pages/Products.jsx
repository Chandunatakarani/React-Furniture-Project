import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import { products } from '../Components/Product';


const Product = () => {
  const {category, id}=useParams()  
  const[filteredproducts,setfilteredproducts]=useState([])
  const[singleproduct,setsingleproduct]=useState([])
  useEffect(()=>{
    const singlefiltered= products.filter(
      (product) =>product.id === id
    );
    setsingleproduct(singlefiltered);
   const filtered= products.filter(
    (product) =>product.category === category
  );
  setfilteredproducts(filtered);
  
  },[])  
  console.log(singleproduct);
  console.log(filteredproducts);
  
  
  return (
    <div>
      <Header />     
        <h1 className='text-center text-success'>products</h1>
        <div className="container">
          <div className="row">
            
          </div>
        </div>
    </div>
  )
}

export default Product