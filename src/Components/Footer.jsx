import React from 'react';
import './Corousel.css'

const Footer = () => {
  return (
    <div className='footerbg'>
        <div className="container mt-5 ">
            <div className="row ">
                <div className="col-3">
                    <div className="card  text-white mt-5 mb-5 footer">
                        <div className="card-title">
                            <h3 className='text-center'>
                            <i className="fa fa-briefcase"></i>
                            Mart
                                </h3>
                            <div className="card-body">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores rem tenetur ipsa tempore dolorem odit sint ut cupiditate enim laborum?
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card  text-white mt-5  footer">
                        <div className="card-title">
                            <h3 className='text-center'>About Us</h3>
                            <div className="card-body">
                                <ul className='footer-about'>
                                    <li>Careers</li>
                                    <li>Our Stores</li>
                                    <li>Our Cares</li>
                                    <li>Terms & Conditions</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-white mt-5 footer">
                        <div className="card-title">
                            <h3 className='text-center'>Customer Care</h3>
                            <div className="card-body">
                            <ul className='footer-about'>
                                    <li>Help Center</li>
                                    <li>How To Buy</li>
                                    <li>Track Your Order</li>
                                    <li>Corporate $ Bulk Purchasing</li>
                                    <li>Returns & Refunds</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card  text-white mt-5 footer">
                        <div className="card-title">
                            <h3 className='text-center'>Contact Us</h3>
                            <div className="card-body">
                            <ul className='footer-about'>
                                    <li>70 Washington Square South, New York, NY 10012,United States</li>
                                    <li>Email:chandunatakarani@gmail.com</li>
                                    <li>Phone:+91 8688208544</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer