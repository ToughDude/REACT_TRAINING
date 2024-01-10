import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Button, Container } from "react-bootstrap";
import CartList from "./CartList";

export default function Cart() {
    let { items, total, checkout } = useContext(CartContext);

    return <Container>
        {
            items.map(item => <CartList product={item} key={item.id} />)
        }
        <div className="row">
            <div className="col-md-10">&nbsp;</div>
            <div className="col-md-2">Total {total}</div>
        </div>
        <div className="row">
            <div className="col-md-10">&nbsp;</div>
            <div className="col-md-2">
                <Button onClick={() => checkout()}>Checkout</Button>
            </div>
        </div>
    </Container>
}