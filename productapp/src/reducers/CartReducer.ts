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
        case 'INCREMENT': return state;
        case 'CLEAR_CART': return {
            products: [],
            total: 0
        }
        default: return state;
    }
}