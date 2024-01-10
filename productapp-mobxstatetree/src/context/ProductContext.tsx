import { createContext, useEffect, useState } from "react";
import Product from "../model/Product";
import axios from 'axios';

type ContextType = {
    products: Product[]
}

// creates a placeholder {context} to store data for react
const ProductContext = createContext<ContextType>({
    products: []
});

type Props = {
    children: React.ReactNode
}

export default function ProductProvider(props: Props) {
    let [products, setProducts] = useState<Product[]>([]);

    // componentDidMount
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(response => {
            setProducts(response.data);
        });
    }, []);

    return <div>
        <ProductContext.Provider value={{products}}>
            {props.children}
        </ProductContext.Provider>
    </div>
}

export { ProductContext };