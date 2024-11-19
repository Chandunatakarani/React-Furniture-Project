import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import { Store } from './Redux-store/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
   <Provider store={Store}>
    <App />
  </Provider>
  </BrowserRouter>
);

