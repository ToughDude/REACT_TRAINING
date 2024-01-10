import { useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from '../context/ProductContext';

export default function ProductList() {
  let {products} = useContext(ProductContext); // Consumer
    return <div className="container">
        <div className="row">
            {
                products.map(p => <ProductCard product={p} key={p.id}/>)
            }
        </div>
    </div>
}

