import React, { useContext } from 'react'

import { Button, Container } from 'react-bootstrap';
import CartList from './CartList';
import { observer } from 'mobx-react-lite';
import { CartContext } from '..';

 function CartComponent() {
  let {total, cartItems} = useContext(CartContext);

  return (
    <Container>
      {
        cartItems.map(item => <CartList product={item} key={item.id} />)
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
          <Button>Checkout</Button>
        </div>
      </div>
    </Container>
  )
}

export default observer(CartComponent);