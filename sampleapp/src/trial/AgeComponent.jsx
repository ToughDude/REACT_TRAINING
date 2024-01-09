import React, { Component } from 'react'

export default function AgeComponent({ age }) {
    console.log("Age Renders...")
    return (
        <div> Age : {age}</div>
    )
}

// export default class AgeComponent extends Component {
//     shouldComponentUpdate(nextProps, nextState) {
//         if (this.props.age === nextProps.age) {
//             return false;
//         }
//         return true;
//     }

//     render() {
//         console.log("Age Renders...")
//         return (
//             <div>Age: {this.props.age}</div>
//         )
//     }
// }
