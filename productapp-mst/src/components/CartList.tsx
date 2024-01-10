import { useContext } from "react";
import CartItem from "../model/CartItem";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

type AppProps = {
    product: CartItem
}

export default function CartList({ product }: AppProps) {
    let { increment } = useContext(CartContext);
    return <div className="row">
        <div className="col-md-2">
            <img src={product.image} style={{ width: '50px' }} />
        </div>
        <div className="col-md-2">
            {product.title}
        </div>
        <div className="col-md-4">
            <Button onClick={() => increment(product.id)}>+</Button>
            &nbsp;
            {product.quantity}
            &nbsp;
            <Button>-</Button>
        </div>
        <div className="col-md-2">
            Price : {product.price}
        </div>
        <div className="col-md-2">
            Amount: {product.amount}
        </div>
    </div>
}