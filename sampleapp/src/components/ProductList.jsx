import { Component } from "react";
import ProductRow from "./ProductRow";

export default class ProductList extends Component {
    state = {
        products: [
            {
                "id": 1,
                "name": "HDMI Connector",
                "price": 1200.00,
                "category": "computer"
            },
            {
                "id": 2,
                "name": "iPhone 14",
                "price": 98200.00,
                "category": "mobile"
            },
            {
                "id": 3,
                "name": "OnePlus Nord",
                "price": 87300.00,
                "category": "mobile"
            },
            {
                "id": 4,
                "name": "Sony Bravia",
                "price": 210000.00,
                "category": "tv"
            },
            {
                "id": 5,
                "name": "Macbook Pro",
                "price": 168000.00,
                "category": "computer"
            }
        ]
    }

    render() {
        return <div>
            {
                this.state.products.map(product => <ProductRow product={product}/>)
            }
        </div>
    }
}