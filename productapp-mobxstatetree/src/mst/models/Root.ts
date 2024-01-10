
import { Instance, onSnapshot, types } from 'mobx-state-tree';
import { Cart } from './Cart';
import { createContext } from 'react';

// similar to configureStore --> combineReducers
const RootModel = types.model({
    cart: Cart,
    // users:User,
    // products: Product
})

let initialState = RootModel.create({
    cart: { items: [] }
})

export const rootStore = initialState;

// gets called whenever state changes
onSnapshot(rootStore, (snapshot) => {
    console.log("SnapShot :", snapshot);
    localStorage.setItem("rootState", JSON.stringify(snapshot));
});

export type RootInstance = Instance<typeof RootModel>
export const RootStoreContext = createContext<RootInstance | null>(rootStore);