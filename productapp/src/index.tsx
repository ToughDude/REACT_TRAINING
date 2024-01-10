import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductProvider from './context/ProductContext';

import { Provider, defaultTheme } from '@adobe/react-spectrum'
import CartProvider from './context/CartContext';
import BatchApp from './18/BatchApp';

// ReactDOM.render(<BatchApp />, document.getElementById('root'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <BrowserRouter>
    {/* <ProductProvider>
      <CartProvider> */}
    <App />
    {/* </CartProvider>
    </ProductProvider> */}
  </BrowserRouter>


);
