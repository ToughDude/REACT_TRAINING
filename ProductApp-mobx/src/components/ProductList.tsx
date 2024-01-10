import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Container } from 'react-bootstrap';
import ProductCard from './ProductCard';

export default function ProductList() {
    let {products} = useContext(ProductContext);

  return (
    <Container>
        <div className='row'>
        {
            products.map(product => <ProductCard 
                key={product.id}
                product={product}/>)
        }
         </div>
    </Container>
  )
}
