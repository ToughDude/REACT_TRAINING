import { createContext, useEffect, useState } from "react";
import Product from "../model/Product"
import axios from "axios";

type ContextType = {
    products: Product[];
}

const ProductContext = createContext<ContextType>({
    products: []
});

type AppProps = {
    children: React.ReactNode
}
export default function ProductProvider({ children }: AppProps) {
    let [products, setProducts] = useState<Product[]>([]);

    // componentDidMount
    useEffect(() => {
        let data = axios.get("http://localhost:1234/products")
            .then(response => {
                setProducts(response.data);
            })
    }, []);

    return <ProductContext.Provider value={{ products }}>
        {children}
    </ProductContext.Provider>

}
export {
    ProductContext
}