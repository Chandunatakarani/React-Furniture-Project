import React from 'react'
const Cards = () => {
  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="card" style={{ backgroundColor: "#fdefe6" }}>
            <div className="card-tile text-center mt-5" >
            <i className="fa fa-car"></i>
            <h5>Free Shipping</h5>
              <div className="card-body">
              <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ backgroundColor: "#ceebe9" }}>
            <div className="card-tile text-center mt-5">
            <i className="fa fa-credit-card"></i>
            <h5>Safe payment</h5>
              <div className="card-body">
              <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ backgroundColor: "#e2f2b2" }}>
            <div className="card-tile text-center mt-5">
            <i className="fa fa-credit-card"></i>
            <h5>Secure payment</h5>
              <div className="card-body">
              <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ backgroundColor: "#d6e5fb" }}>
            <div className="card-tile text-center mt-5">
            <i className="fa fa-credit-card "></i>
            <h5>Back Guarantee</h5>
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet.</p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cards