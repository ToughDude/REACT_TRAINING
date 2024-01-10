import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductProvider from './context/ProductContext';

import cartStore from './mobx/CartStore';

import {enableLogging} from 'mobx-logger'


enableLogging();

const CartContext = createContext(cartStore);

export {
  CartContext
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <BrowserRouter>
    <ProductProvider>
      <App />
    </ProductProvider>
  </BrowserRouter>


);
