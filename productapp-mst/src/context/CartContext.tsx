import { createContext, useContext, useReducer } from "react"
import CartItem from "../model/CartItem"
import Product from "../model/Product"
import CartReducer from "../reducers/CartReducer"
import ProductCard from "../components/ProductCard"
import { ProductContext } from "./ProductContext"

type Props = {
    children: React.ReactNode
}

type ContextType = {
    items: CartItem[],
    total: number
    addToCart: (product: Product) => void,
    increment: (id: number) => void,
    checkout: () => void
}
export const CartContext = createContext<ContextType>({
    items: [],
    total: 0,
    addToCart: (product: Product) => { },
    increment: (id: number) => { },
    checkout: () => { }
});

const initialState = {
    cartItems: [],
    total: 0
}
export default function CartProvider(props: Props) {
    let [state, dispatch] = useReducer(CartReducer, initialState);
    let {products} = useContext(ProductContext);

    function addToCart(product: Product) {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    }

    function checkout() {
        dispatch({ type: 'CLEAR' });
    }

    function increment(id: number) {
        dispatch({ type: 'INCREMENT', payload: id })
    }

    return <div>
        <CartContext.Provider value={{
            items: state.cartItems,
            total: state.total,
            addToCart,
            increment,
            checkout
        }}>
            {props.children}
        </CartContext.Provider>
    </div>
}