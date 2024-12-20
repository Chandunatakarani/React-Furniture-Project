import React, {useEffect, useState } from 'react';
import { discoutProducts } from './Product';
import './Corousel.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Redux-store/ActionCreator';
import 'react-toastify/dist/ReactToastify.css'; 
const Discount = () => {
    
    
    const [discount, setDiscount] = useState([]);
    // const sofa=useContext()
    const dispatch = useDispatch();

    useEffect(() => {
        setDiscount(discoutProducts);
    }, []);
    const imageclicked = ()=>{
        // console.log(sofa);
        
    }
    return (
        <>
            <h2 className='text-success text-center mt-5'>Discount Available On</h2>

            <div className="container mt-5">
                <div className="row">
                    {discount.map((item) => (
                        <div key={item.id} className="col-12 col-md-4 mb-4">
                            <div className="card">
                                <div className="card-title">
                                    <button className='discount-button'>
                                        <h6>{item.discount}% off</h6>
                                    </button>
                                    <Link to={`/products/${item.category}/${item.id}`}>
                                    <img  onClick={()=>imageclicked()}className="w-100" src={item.imgUrl} alt={item.productName}/>
                                    </Link>
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
                                             <button className="btn plus-symbol" onClick={()=>dispatch(addtocart(item))}>+</button>
                                            
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
            );
};

export default Discount;
