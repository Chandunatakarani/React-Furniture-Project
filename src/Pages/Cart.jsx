import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { removefromcart } from '../Redux-store/ActionCreator';
import '../Components/Corousel.css';

const Cart = () => {
  const cartdata = useSelector((state) => state.productdata.cartdata);
  const dispatch = useDispatch();


  const totalsum = cartdata.reduce((accum, item) => accum + item.price, 0);

  const cancelimage = (id) => {
    dispatch(removefromcart(id)); 
  };

  return (
    <div>
      <Header />
      
      {cartdata.length > 0 ? (
        <div className="card w-25 cart-summary">
          <div className="card-title">
            <h4>Cart Summary</h4>
            <div className="card-body">
              <p>Total Price :</p>
              <p>${totalsum}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-3 text-success">
          <h3>No products In Cart</h3>
        </div>
      )}

      <div className="container mt-3">
        <div className="row">
          {cartdata.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div className="row border w-100 mb-3">
                <div className="col-6">
                  <img className="w-100" src={item.imgUrl} alt={item.productName} />
                </div>
                <div className="col-6">
                  <h5>{item.productName}</h5>
                  <p>${item.price}</p>
                  <button className="btn btn-danger" onClick={() => cancelimage(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
