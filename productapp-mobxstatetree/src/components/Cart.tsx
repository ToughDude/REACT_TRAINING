import { useContext } from "react"

import { Button, Container } from "react-bootstrap";
import CartList from "./CartList";
// import { cartContext } from "..";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../mst/models/Root";

function Cart() {
    // let cartStore = useContext(cartContext);
    const store = useContext(RootStoreContext);
    return <Container>
        {
            store?.cart.items.map(item => <CartList product={item} key={item.id} />)
        }
        <div className="row">
            <div className="col-md-10">&nbsp;</div>
            <div className="col-md-2">Total {store?.cart.total}</div>
        </div>
        <div className="row">
            <div className="col-md-10">&nbsp;</div>
            <div className="col-md-2">
                <Button>Checkout</Button>
            </div>
        </div>
    </Container>
}

export default observer(Cart);