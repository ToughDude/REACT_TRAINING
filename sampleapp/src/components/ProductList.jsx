import { Component } from "react";
import ProductRow from "./ProductRow";
import Filter from "./Filter";

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

    componentDidMount() {
        this.setState({
            original: this.state.products
        })
    }
    filterProducts(txt) {
        let prds = this.state
            .original.filter(p => p.name.toUpperCase().indexOf(txt.toUpperCase()) >= 0)

        this.setState({
            products: prds
        })
    }
    deleteProduct(id) {
        let prds = this.state.products.filter(p => p.id !== id);
        //update the state
        // this.state.products = prds; // don't use this

        // async function
        this.setState({
            products: prds
        })
    }
    render() {
        return <div>
            <Filter filterEvent={(txt) => this.filterProducts(txt)}/>
            {
                this.state.products.map(product => <ProductRow
                    delEvent={(id) => this.deleteProduct(id)}
                    key={product.id}
                    product={product} />)
            }
        </div>
    }
}