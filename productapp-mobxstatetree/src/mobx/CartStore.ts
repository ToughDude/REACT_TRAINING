import { action, computed, makeObservable, observable } from "mobx";

export class CartItem {
    @observable
    id: number = 0;
    @observable
    title: string = "";
    @observable
    price: number = 0;
    @observable
    image: string = "";
    @observable
    description: string = "";
    @observable
    quantity: number = 0;
    @observable
    amount: number = 0;

    constructor(id:number, title: string, price:number, image:string, description:string, quantity: number, amount:number){
        makeObservable(this);
        this.id = id;
        this.title = title;
        this.price = price;
        this.image = image;
        this.description = description;
        this.quantity = quantity;
        this.amount = amount;
    }

    @action
    increment() {
        this.quantity ++;
        this.amount = this.price * this.price
    }
}

class CartStore {
    @observable
    cart:CartItem[] = [];

    constructor() {
        makeObservable(this);
    }

    @action
    addToCart(product:CartItem) {
        this.cart = [...this.cart, product];
    }

    @action
    increment(id:number) {
        let product = this.cart.find(p => p.id === id);
        product?.increment();
    }

    @computed
    get count() {
        return this.cart.length;
    }

    @computed
    get total() {
        return this.cart.map(cart => cart.amount).reduce(( p1, p2) => p1+p2, 0);
    }
}

const cartStore = new CartStore(); 
export default cartStore; // singleton object