import React, { useContext } from 'react'
import Product from '../model/Product'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { CartContext } from '..';
import { CartItem } from '../mobx/CartStore';
import { observer } from 'mobx-react-lite';


type AppProps = {
    product: Product
}

function ProductCard({ product }: AppProps) {
    let cartStore = useContext(CartContext);

    return (
        <div className='col-sm-6 col-md-4 my-2'>
            <Card style={{ width: '18rem' }}>
                <Link to={`/details/${product.id}`}>
                    <Card.Img variant="top" src={product.image} />
                </Link>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    Rs. {product.price}
                    &nbsp;
                    <FontAwesomeIcon icon={faHeart} color="red" />
                    &nbsp;
                    <FontAwesomeIcon
                        onClick={() => cartStore.addToCart(new CartItem(
                            product.id,
                            product.title,
                            product.price,
                            1,
                            product.price,
                            product.image
                        ))}
                        icon={faShoppingCart}
                        color="blue" />
                </Card.Footer>
            </Card>
        </div>
    )
}

export default observer(ProductCard);