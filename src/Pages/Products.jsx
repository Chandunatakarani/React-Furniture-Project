import React, { createContext, useEffect, useState } from 'react';
import Header from '../Components/Header';
import { Link, useParams } from 'react-router-dom';
import { products } from '../Components/Product';
import backgroundimage from '../Components/Images/pexels-pixabay-531880.jpg';
import '../Components/Corousel.css';
import Footer from '../Components/Footer';
export const sofadata = createContext()

const Product = () => {
  const { category, id } = useParams()
  const [filteredproducts, setfilteredproducts] = useState([])
  const [singleproduct, setsingleproduct] = useState([])
  const [sofa, setsofa] = useState([])
  useEffect(() => {
    const singlefiltered = products.filter(
      (product) => product.id === id
    );
    setsingleproduct(singlefiltered);
    const filtered = products.filter(
      (product) => product.category === category
    );
    setfilteredproducts(filtered);
    const sofacategory = products.filter(
      (product) => product.category === "sofa"
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
    <sofadata.Provider value={{ singleproduct,sofa }}>
      <div>
        <Header />
        <img className='background-image' src={backgroundimage} alt="" />
        <h1 className='text-center products'>
                   {singleproduct.length > 0 ? singleproduct[0].productName : ""}
                  </h1>
        <div className="container pt-5">
          <div className="row search-dropdown">
            <div className="col-4">
              <div className="dropdown">
                <button className="btn dropdown-bar  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown button
                </button>
                <ul className="dropdown-menu">
                  <Link to="/products/:category/:id">
                  <li className="dropdown-item">Sofa</li>
                  <li className="dropdown-item">Mobile</li>
                  <li className="dropdown-item">Chair</li>
                  <li className="dropdown-item">Headphones</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-8">
              <input className="search-bar" type="search" placeholder='search...' />
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-center align-items-center min-vh-100">
            {
              singleproduct.map((sofaproduct) => (
                <>
                  <div className="col-6">
                        <img className="w-100 mb-5" src={sofaproduct.imgUrl} alt="" />
                        </div>
                        <div className="col-6">
                        <h2>{sofaproduct.productName}</h2>
                        <div className="row pt-2">
                        <div className="rating">                        
                          <i className="fa fa-star rating-star" ></i>
                          <i className="fa fa-star rating-star" ></i>
                          <i className="fa fa-star rating-star" ></i>
                          <i className="fa fa-star rating-star" ></i>
                          <i className="fa fa-star rating-star" ></i>
                          <h6 className='ratings'>{sofaproduct.reviews[0].rating} ratings</h6>
                          </div>
                            <h4>Price: ${sofaproduct.price}</h4>
                            <h6 className='category'>Category:{sofaproduct.category}</h6>
                            <p>{sofaproduct.shortDesc}</p>
                            <input className="form-number" type="number"placeholder='Quantity'></input>
                            <button className='plus-button'>Add To Cart</button>
                    </div>
                  </div>
                </>
              ))
            }
          </div>
          <h5>Description</h5>
          <p>{singleproduct.length > 0 ? singleproduct[0]?.description : "No description available"}</p>
        </div>
        
        <h3 className='text-center text-success mt-5'>Items You Might Like</h3>
        <div className="container mt-5">
          <div className="row g-5">
            {
              filteredproducts.map((item)=>(
                <>
                <div className="col-4">
                    <div className="card">
                      <div className="card-title">
                      <Link to={`/products/${item.category}/${item.id}`}>
                        <img className="w-100" src={item.imgUrl} alt="" />
                        </Link>
                        <h4>{item.productName}</h4>
                        <div className="rating">
                          <i className="fa fa-star rating-star" ></i>
                          <i className="fa fa-star rating-star" ></i>
                          <i className="fa fa-star rating-star" ></i>
                          <i className="fa fa-star rating-star" ></i>
                          <i className="fa fa-star rating-star" ></i>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <h4>Price: ${item.price}</h4>
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