import filter, { map } from "./lib";

let products = [
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

let toDiv = (elem) => {
    return `
        <div className="card">
            <div className="card-header">
                ${elem.name}
            </div>
            <div className="card-body">
                ${elem.price}, ${elem.category}
            </div>
        </div>
    `
}

let cards = map(products, toDiv);

cards.forEach(card => console.log(card));

let  React = {
    createElement: (tag, props, ...children) => {
        var element = {tag, props: {...props, children}};
        console.log(element);
        var domElement = document.createElement(tag);
        return element;
    }
}

let product = (
    <div className="card">
        <h1 className="card-header">
            Wacom Tablet
        </h1>
        <p>Rs. 4200.00</p>
    </div>
);

function render(element, container) {
    if(["string","number"].includes(typeof element)) {
        container.appendChild(document.createTextNode(element));
        return;
    }

    var domElement = document.createElement(element.tag);
    if(element.props.children) {
        element.props.children.forEach(child => render(child, domElement))
    }
    container.appendChild(domElement);
}

render(product, document.getElementById("root"))