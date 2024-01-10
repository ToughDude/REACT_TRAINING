import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Product from '../model/Product';
import { CartContext } from '../context/CartContext';

type AppProps = {
    product: Product
}
// bootstrap is 12 grid system --> row is madw of 12 cols --> 3 cards can come in a row
export default function ProductCard({ product }: AppProps) {
    let {addToCart} = useContext(CartContext);
    return <div className='col-md-4'>
        <div className="item">
            <div className="mb-r">
                <div className="card">
                    <div className="card-img-top">
                        <Link to={`/details/${product.id}`}>
                            <img src={product.image} alt="" width="auto" height="340px" />
                        </Link>
                    </div>
                    <div className="card-body text-center no-padding">
                        <p className="card-title">
                            <strong>
                                <a>{product.title}</a>
                            </strong>
                        </p>
                        <p className="card-text">{product.description}</p>
                        <div className="card-footer">
                            <span className="left">₹ {product.price}</span>
                            <span className="right px-2">

                                <FontAwesomeIcon icon={faHeart} color="red" className='px-3' />
                                <FontAwesomeIcon 
                                    onClick={() => addToCart(product)}
                                    icon={faShoppingCart}
                                     color="blue" />

                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}