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
        <div className="container">
            <div className="row">
                {
                    sales.map((item)=>(
                        <>
                        <div className="col-4">
                        <div className="card">
                            <div className="card-title">
                                <img  className="w-100"src={item.imgUrl} alt="" />
                                <div className="card-body">
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
                        </div>
                        </>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Bestsales