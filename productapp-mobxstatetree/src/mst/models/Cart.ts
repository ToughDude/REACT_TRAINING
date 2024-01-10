import { SnapshotIn, types } from 'mobx-state-tree';

export const CartItem = types.model({
    id: types.number,
    title: types.string,
    price: types.number,
    image: types.string,
    description: types.string,
    quantity: types.number,
    amount: types.number
}).actions(self => ({

})).views(self => ({

}));

export const Cart = types.model({
    items: types.optional(types.array(CartItem), [])
}).actions(self => ({
    addToCart(cartItem: SnapshotIn<typeof CartItem>) {
        self.items.push(cartItem)
    },
    increment(id: number) {
        // logic
    }
})).views(self => ({
    get total() {
        return self.items.map(item => item.amount).reduce((a1, a2) => a1 + a2, 0);
    }
}))

/*
    SnapShot don't contain any type information, stripped from all actions, views,..

*/