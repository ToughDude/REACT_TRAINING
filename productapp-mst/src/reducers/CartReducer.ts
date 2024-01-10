import CartItem from "../model/CartItem";
import Product from "../model/Product";

type Action = {
    type: "ADD_TO_CART",
    payload: Product
} |
{
    type: "INCREMENT",
    payload: number
} |
{
    type: "CLEAR"
}

export interface CartStateType {
    cartItems: CartItem[],
    total: number
}

export default function CartReducer(state: CartStateType, action: Action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const product = { ...action.payload }; // from ProductCard
            let item: CartItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                description: product.description,
                quantity: 1,
                image: product.image,
                amount: product.price
            }

            let cartItems = state.cartItems;
            let total = state.total += item.amount;
            return { cartItems: [...cartItems, item], total }
        case 'INCREMENT':
            return state;
        case 'CLEAR':
            return {
                cartItems: [],
                total: 0
            }
        default:
            return state;
    }
}