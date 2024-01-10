import React, { Suspense, lazy } from 'react';
import NavbarComp from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList';


const Cart = lazy(() => import('./components/Cart'));
const Details = lazy(() => import('./components/Details'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComp />
      </div>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={
          <Suspense fallback={<h1>Loading Cart....</h1>}>
            <Cart />
          </Suspense>
        } />
        <Route path="/details/:id" element={
          <Suspense fallback={<h1>Loading details....</h1>}>
            <Details />
          </Suspense>
        } />
        <Route path="/" element={<ProductList />} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
