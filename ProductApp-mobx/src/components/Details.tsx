import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../model/Product';
import axios from 'axios';
import { Container } from 'react-bootstrap';

export default function Details() {
  let {id} = useParams();
  let [product,setProduct] = useState<Product>();
  // similar to componentDidUpdate()
  useEffect(() => {
    axios.get(`http://localhost:1234/products/${id}`).then(response => {
      setProduct(response.data);
    })
  }, [id]);


  return (
    <Container>
      {
        product && <div>
          <img src={product.image} /> <br />
          Name: {product.title} <br />
          Price : {product.price}
        </div>
      }
    </Container>
  )
}
