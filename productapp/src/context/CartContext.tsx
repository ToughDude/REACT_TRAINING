import { createContext, useReducer } from "react";
import Cart from "../model/Cart";
import CartReducer from "../reducers/CartReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
type ContextType = {
    cartItems: Cart[],
    total: number,
    addToCart: (cart:Cart) => void,
    increment: (id:number) =>void,
    checkout: () => void
}
const CartContext = createContext<ContextType>({
    cartItems: [],
    total: 0,
    addToCart: (cart:Cart) => {},
    increment: (id:number) => {},
    checkout: () => {}
});

type PropsType = {
    children: React.ReactNode
}

const initialState = {
    products: [],
    total: 0
}

export default function CartProvider({ children }: PropsType) {
    let navigate = useNavigate();
    let [state, dispatch] = useReducer(CartReducer, initialState);
    function addToCart(item:Cart) {
        dispatch({type:'ADD_TO_CART', payload: item});
    }

    function checkout() {
        let order = {
            customer: window.sessionStorage.getItem("customer"),
            items: state.products,
            total: state.total
        }

        axios.post("http://localhost:1234/orders", order).then(response => {
            dispatch({type:'CLEAR_CART'});
            navigate("/");
        })
        
    }

    function increment(id:number) {
        dispatch({type:'INCREMENT', payload: id})
    }
    return <CartContext.Provider value={
        {
            cartItems: state.products,
            total: state.total,
            addToCart,
            increment,
            checkout
        }
       }>
        {children}
    </CartContext.Provider>
}


export {
    CartContext
}