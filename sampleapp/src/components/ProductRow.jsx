import { Component } from "react";

export default class ProductRow extends Component {

    render() {
        let { id, name, price, cateogry } = this.props.product;
        return <div className="card">
            Name: {name} <br />
            Price : {price} <br />
            Category : {cateogry} <br />
            <button>Delete</button>
        </div>
    }
}