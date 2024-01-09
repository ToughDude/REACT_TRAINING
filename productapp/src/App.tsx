import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ProductList from './components/ProductList';

import ProductForm from './components/ProductForm';
import Default from './components/Default';

const CartComponent = lazy(() => import ('./components/CartComponent'));
const Details = lazy(() => import('./components/Details'));

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={
          <Suspense fallback={<h1>Loading...</h1>}>
              <CartComponent />
          </Suspense>
        
        } />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/new_product" element={<ProductForm />} />
        <Route path="/" element={<ProductList />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
