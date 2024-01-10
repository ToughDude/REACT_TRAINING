import { action, computed, makeObservable, observable } from "mobx";

export class CartItem {

    @observable
    id: number;
    @observable
    title: string;
    @observable
    price: number;
    @observable
    quantity: number;
    @observable
    amount: number;

    @observable
    image: string

    constructor(id: number, title: string,
        price: number, quantity: number, amount: number, image: string) {
        makeObservable(this);
        this.id = id;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.amount = amount;
        this.image = image
    }

    @action
    public increment(): void {
        this.quantity++;
        this.amount = this.price * this.quantity;
    }
}

class CartStore {
    @observable
    cartItems: CartItem[] = [];

    constructor() {
        makeObservable(this);
        this.cartItems = [];
    }

    @computed
    get total() {
        return this.cartItems.map(item => item.amount)
            .reduce((v1, v2) => v1 + v2);
    }

    @action
    addToCart(cartItem: CartItem) {
        this.cartItems.push(cartItem);
    }

    @action
    increment(id: number) {
        let product = this.cartItems.find(p => p.id === id);
        product?.increment();
    }
}

const cartStore = new CartStore();
export default cartStore; //singleton