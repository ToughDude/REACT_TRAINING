import { useContext } from "react";
import CartItem from "../model/CartItem";

import { Button } from "react-bootstrap";
// import { cartContext } from "..";
import { observer } from "mobx-react-lite";

type AppProps = {
    product: CartItem
}

function CartList({ product }: AppProps) {
    // let cartStore = useContext(cartContext);
    return <div className="row">
        <div className="col-md-2">
            <img src={product.image} style={{ width: '50px' }} />
        </div>
        <div className="col-md-2">
            {product.title}
        </div>
        <div className="col-md-4">
            <Button onClick={() => { }}>+</Button>
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

export default observer(CartList);