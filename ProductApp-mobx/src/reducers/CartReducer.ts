import { stat } from "fs";
import Cart from "../model/Cart"

type Action = {
    type:"ADD_TO_CART",
    payload: Cart
} |
{
    type: "CLEAR_CART"
} |
{
    type: "INCREMENT",
    payload: number
};

type CartState = {
    products: Cart[],
    total: number
}

export default function CartReducer(state: CartState, action:Action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                products: [...state.products, action.payload],
                total: state.total + action.payload.amount
            }
        case 'INCREMENT': 
        let products = state.products;
        products.forEach(p => {
            if(p.id === action.payload) {
                p.quantity++;
                p.amount = p.price * p.quantity
            }
        });
        let total = products.map(p => p.amount).reduce( (v1, v2) => v1 + v2);
        return {
            products,
            total
        };
        case 'CLEAR_CART': return {
            products: [],
            total: 0
        }
        default: return state;
    }
}