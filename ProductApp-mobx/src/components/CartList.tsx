import React, { useContext } from 'react'
import { Button, Container } from 'react-bootstrap'
type AppProps = {
  product: any
}
export default function CartList({ product }: AppProps) {
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
        <Button>+</Button>
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
