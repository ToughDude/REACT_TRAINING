import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Button, Container } from 'react-bootstrap';
import CartList from './CartList';

export default function CartComponent() {
  let { cartItems, total, checkout } = useContext(CartContext);
  return (
    <Container>
      {
        cartItems.map(product => <CartList
          product={product}
          key={product.id} />)
      }
      <div className='row'>
        <div className='col-md-10'>
          &nbsp;
        </div>
        <div className='col-md-2'>
          Total : {total}
        </div>
      </div>
      <div className='row'>
        <div className='col-md-10'>
          &nbsp;
        </div>
        <div className='col-md-2'>
          <Button onClick={() => checkout()}>Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
