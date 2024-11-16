import React, { createContext, useEffect, useState } from 'react';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import { products } from '../Components/Product';
import backgroundimage from '../Components/Images/pexels-pixabay-531880.jpg';
import '../Components/Corousel.css';
import Footer from '../Components/Footer';
 export const sofadata=createContext()

const Product = () => {
  const { category, id } = useParams()
  const [filteredproducts, setfilteredproducts] = useState([])
  const [singleproduct, setsingleproduct] = useState([])
  const [sofa,setsofa]=useState([])
  useEffect(() => {
    const singlefiltered = products.filter(
      (product) => product.id === id
    );
    setsingleproduct(singlefiltered);
    const filtered = products.filter(
      (product) => product.category === category
    );
    setfilteredproducts(filtered);
    const sofacategory =products.filter(
      (product) => product.category ==="sofa"
    );
    setsofa(sofacategory)
    
  }, [])
  // console.log(singleproduct);
  // console.log(filteredproducts);
  // console.log(sofa);
  // const imageclicked = ()=>{
  //  setsofa(singleproduct)
  // }
  return (
    <sofadata.Provider value={{singleproduct}}>
    <div>
      <Header />
      <img className='background-image' src={backgroundimage} alt="" />

      <h1 className='text-center products'>products</h1>
      <div className="container">
        <div className="row search-dropdown">
          <div className="col-4">
            <div className="dropdown">
              <button className="btn dropdown-bar  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/products/:category/:id">Sofa</a></li>
                <li><a className="dropdown-item" href="/products/:category/:id">Mobile</a></li>
                <li><a className="dropdown-item" href="/products/:category/:id">Chair</a></li>
                <li><a className="dropdown-item" href="/products/:category/:id">Headphones</a></li>
              </ul>
            </div>
          </div>
          <div className="col-8">
            <input className="search-bar" type="search" placeholder='search...' />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row g-4">
          {
            sofa.map((sofaproduct)=>(
              <>
              <div className="col-4">
                <div className="card">
                  <div className="card-title">
                <img  className="w-100"src={sofaproduct.imgUrl} alt="" />
                <h4>{sofaproduct.productName}</h4>
                <div className="rating">
                                        <i className="fa fa-star rating-star" ></i>
                                        <i className="fa fa-star rating-star" ></i>
                                        <i className="fa fa-star rating-star" ></i>
                                        <i className="fa fa-star rating-star" ></i>
                                        <i className="fa fa-star rating-star" ></i>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <h4>Price: ${sofaproduct.price}</h4>
                                            </div>
                                            <div className="col-6">
                                                <button className="btn plus-symbol">+</button>
                                            </div>
                                            </div>
                  </div>
                </div>

              </div>
              </>
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
    </sofadata.Provider>
  )
}

export default Product