import React, { createContext, useEffect, useState } from 'react';
import { products } from '../Components/Product';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import Discount from '../Components/Discount';
import Home from '../Components/Home';

export const dsdata = createContext();

const Cart = () => {
  const { id: cid } = useParams(); // Destructure and rename for clarity
  const [fins, setFins] = useState([]);

  useEffect(() => {
    // Filter products based on cid
    const sofacategory = products.filter((product) => product.id === cid);
    setFins(sofacategory);
  }, [cid]); // Re-run when `cid` changes

  console.log(fins);

  return (
    <dsdata.Provider value={cid}>
      <div>
        <Home />
      </div>
    </dsdata.Provider>
  );
};

export default Cart;
