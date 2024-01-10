import React, { useContext } from 'react'
import { Button, Container } from 'react-bootstrap'
import { CartContext } from '..';
type AppProps = {
  product: any
}
export default function CartList({ product }: AppProps) {
  let cartStore = useContext(CartContext);
  return (
    <div className='row'>
      <div className='col-md-2'>
        <img src={product.image} style={{ "width": "50px" }} />
      </div>
      <div className='col-md-2'>
        {product.title}
      </div>
      <div className='col-md-4'>
        <Button>-</Button>
        {product.quantity}
        <Button onClick={() => cartStore.increment(product.id)}>+</Button>
      </div>
      <div className='col-md-2'>
        {product.price}
      </div>
      <div className='col-md-2'>
        {product.amount}
      </div>
    </div>
  )
}
