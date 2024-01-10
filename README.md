# REACT
Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Emails: banu@lucidatechnologies.com; banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/REACT

Softwares Required:

Visual Studio Code.
Chrome Web Browser
NodeJS Latest LTS

=============

Rendering

Server Side Rendering
* Servlet --> JSP / Thymeleaf
* NodeJS --> Handlebars / Mustache / Underscore / Jade / Pug / EJS

Client Side Rendering

Web technologies
* JS --> DOM
document.createElement("div")

document.appendChild(...)

document.querySelector("div")

* jQuery

* Templates
Handlebars / Mustache / Underscore 



{{firstName}}

#firstName

_.firstName

----------

MVC Architecuture

* Backbone

* AngularJS --> google --> Framework 

* XHP / FaxJS --> 2011 --> Marcel Laverdt

* 2015 --> ReactJS

* Angular / Vue / ....


==============

NodeJS
--> Platform built on top of JavaScript engine [V8 / JavaScriptVM / SpiderMonkey / IonMonkey]
--> libuv async librarires
* Client side Web application development
--> ES2015+
https://caniuse.com/
--> TypeScript / DART / CoffeeScript / LiveScript / ...

--> Unit Testing
--> E2E testing
--> Liniting --> Static code analysis
--> bundle
--> minification / uglify

let customerName = "Roger" ;

let _c="Roger";

--------

JavaScript build tools

* Grunt
* Gulp
* Webpack
* vite

----------

Steps:
1) webpack-example> npm init --y
creates package.json
2) install dependencies

npm i webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin webpack-dev-server -D



CommonJS
```

lib.js

function filter(..) {}

function map(...) {}

module.exports = {
    filter, map
}

other.js
const {filter, map} = require('./lib');
```
====

ESM --> ES6 module system
```
lib.js

export default function filter(..) {}

export function map(...) {}

other.js

import filter, {map} from './lib'



Babel

if(condition)
{
    let a = 10;
}

// IIFE
let _f = function ()(
    var a = 10

    var b = 100;

    return a;
)();

```

<script src="bundle.js"> </script>

<script src="bundle.gedf#ds15.js"> </script>

https://createapp.dev/webpack

https://rxmarbles.com/

npm run dev

> webpack-example@1.0.0 dev
> webpack --mode development

asset bundle.ef97c131.js 6.42 KiB 

npm run prod
bundle.feea7007.js 914 bytes

npm start

========

https://github.com/chentsulin/awesome-react-renderer

npx create-react-app sampleapp

https://claudiopro.github.io/react-fiber-vs-stack-demo/

https://react.dev/learn/thinking-in-react

<ul>
    <li>1</li>
    <li>One</li>
    <li>Two</li>
</ul>

==========

JavaSCript unit testing libraries:
1) Mocha
2) Jasmine
3) Jest

React Testing Library

accessing Elements:
1) getByXXXXX
2) queryByXXXX
3) findByXXXX --> Async components

```
it("testing <Users> rendering", async () => {
    render(<Users />);
    await waitFor(async () => {
        let divs = await screen.findAllByRole('button');
        expect(divs.length).toBe(10);
    }, {
        timeout: 3000
    })
})
```
npm test -- --coverage

=======

Day 2

1) Mocking
2) E2E testing

npm i cypress -D
============

Component Life Cycle methods

componentDidMount()
shouldComponentUpdate()
componentDidUpdate()
componentWillUnmount()


constructor() ==> render() ===> componentDidMount()
intialize      ==> render with intial data ===> Make APi calls in componentDidMount()

FCP ==> First Contentful paint


closure ==> mechainism where returned function can access all the members of outer function

shouldComponent() ==> for class component
React.memo() ==> for functional component

=======

React Context
Context provides a way to pass data through the component tree without having to pass props down manually at every level.


====

1) react-router-dom
IN SPA, different URLs has to render different components
client side routing

2) React Context

3) axios ==> for API calls

4) React Hooks
16.8 ==> capabilities of class components in functional components
like --> state, life-cycle methods

5) bootstrap / react-bootstrap

6) fontawesome

===

1) NavbarComponent
2) ProductList
3) ProductCard
4) CartComponent
5) CartList
6) Details
7) Default
8) ProductForm


npx create-react-app productapp --template typescript

productapp> npm i axios react-router-dom bootstrap react-bootstrap @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

```
class SomeComponent extends Component {
    state = {
        name: "",
        age : 22
    }

    setName(n) {
        this.setState({
            name: n
        })
    }

    setAge(a) {
        this.setState({
            age: a
        })
    }
}

function SomeComponent() {
    let [name, setName] = useState("");
    let [age, setAge] = useState(22);
}
```

<ProductProvider>
   <App />
</ProductProvider>

npx json-server --watch data.json --port 1234

=====
```
class ProductList extends Component {
    render() {
        <ProductContext.Consumer>
            {
                value => {
                    value.products.map(...)
                }
            }

        </ProductContext.Consumer>
    }
}
```

useReducer() is a hook to be used instead of useState() if
1) mutation depends on previous state
2) conditionally mutate the state

```
let initialState = {count : 0};

		let countReducer = (state, action) => {
			switch(action.type) {
				case "INCREMENT" : return {count: state.count + action.payload};
				case "DECREMENT" : return {count: state.count - 1};
				default: return state;
			}
		};


		function App() {
			let [state, dispatch] = React.useReducer(countReducer, initialState);

			function handleIncrement() {
				let action = {"type" : "INCREMENT", payload : 10};
				dispatch(action);
			}

			return (
		    <div>
		      <p>Count {state.count} </p>
		      <button onClick={() => handleIncrement()}>
		        Click me
		      </button>
		    </div>
  	);

	}
ReactDOM.render(<App />, document.getElementById('root'));



```

https://codepen.io/banuprakash/pen/mGaPXW?editors=1111

============

Day 3
HOC: memo() for shouldComponentUpdate() 
Hooks:
1) useState()
2) useEffect()

// componentDidMount
useEffect(() => {

},[])

// componentDidUpdate
useEffect(() => {

})


// componentDidUpdate
useEffect(() => {

}, [name, age])


// componentDidMount
// componentWillUnMount 
useEffect(() => {

    return () => console.log("unmount)
},[])

3) useReducer()
4) useContext()
5) useNavigate()
6) useParams
7) useSearchParams()
http://localhost:3000/products?page=1&size=20
const [searchParams] = useSearchParams();

const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

const [size, setSize] = useState(Number(searchParams.get("size")) || 5);

8) useCallback

```
https://codepen.io/banuprakashc/pen/YzgWoEv?editors=1111
function Parent() {
    console.log("Parent renders");
    let [name, setName] = React.useState("Rahul");
    let [age, setAge] = React.useState(25);

    let modifyName = React.useCallback(() => {
        setName(name + "...")
    }, [name])

    let modifyAge = React.useCallback(() => {
        setAge(age + 1)
    }, [])

    return (
        <div>
            Name : {name} <br />
            Age : {age} <br />
            <MemoChild handleClick={modifyAge} >
                Change Age
            </MemoChild>
            <MemoChild handleClick={modifyName}>
                Change Name
            </MemoChild>
        </div>
    )
} 


function Child(props) {
    console.log("Child renders!!!", props);
    return <button onClick={() => props.handleClick()}>
        {props.children}
    </button>
}

const MemoChild = React.memo(Child);

ReactDOM.render(<Parent />, document.getElementById("root"));
```
interface Product {
    id: number,
    title: string,
    price: number
}

type Cart: Optional<Product> = {id: 10};

Order:
{
    id: 123, // auto_increment
    item: [
        {},
        {}
    ],
    total: 3434,
    customer: "me@gmail.com"
}

window.sessionStorage.setItem("customer", "banu@gmail.com");

======

React Fragment
<React.Fragment>
    <h1>Hello</h1>
    <p>Good day!!</p>
</React.Fragment>

Controlled Components and Uncontrolled Components

```
Controlled Components
export default function ProductForm() {
    let [name, setName] = useState();
    let [price, setPrice] = useState();
    function submit() {

    }
    return <>
        Name: <input type="text" onChange={(evt) => setName(evt.target.value)}/>
        price: <input type="text" onChange={(evt) => setPrice(evt.target.value)}/>

        <button onClick={() => submit()}>Submit</button>
    </>
}
```


```
UnControlled Components
export default function ProductForm() {
    let nameRef = useRef();
    let priceRef = useRef();
    function submit() {
        let product = {
            name: nameRef.current.value,
            price: priceRef.current.value
        }
    }
    return <>
        Name: <input type="text" ref={nameRef}/>
        price: <input type="text" ref={priceRef}/>

        <button onClick={() => submit()}>Submit</button>
    </>
}
```

React Spectrum
npm i @adobe/react-spectrum

====

```
console.log("Hello");

setTimeout(function one() {
    console.log("1");
}, 0);

setTimeout(function two() {
    console.log("2");
}, 0);

Promise.resolve().then(function p1() {
    console.log("p1");
});

Promise.resolve().then(function p2() {
    console.log("p2");
});


console.log("Bye");

```

Flux Architecture ==> State Management

https://www.youtube.com/watch?v=8pDqJVdNa44&t=3769s

npm i mobx mobx-logger mobx-react-lite