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





