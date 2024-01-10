import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductProvider from './context/ProductContext';
//import cartStore from './mobx/CartStore';
import { RootStoreContext, rootStore } from './mst/models/Root';
import { enableLogging } from 'mobx-logger'
// import { createContext } from 'react';
enableLogging();

// export const cartContext = createContext(cartStore);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <ProductProvider>
    <RootStoreContext.Provider value={rootStore}>
      <App />
    </RootStoreContext.Provider>
  </ProductProvider>

);
