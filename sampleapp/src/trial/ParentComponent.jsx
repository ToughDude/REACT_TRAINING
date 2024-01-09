import React, { Component, memo } from 'react'
import NameComponent from './NameComponent'
import AgeComponent from './AgeComponent'

const MemoAgeComponent = memo(AgeComponent); // HOC
export default class ParentComponent extends Component {
    state = {
        name : "Roger",
        age: 24
    }
  render() {
    console.log("Parent renders...")
    return (
      <div>
        <NameComponent name={this.state.name}/> <br />
        <MemoAgeComponent age={this.state.age} /> <br />
        <button onClick={() => {
            this.setState({
                age: this.state.age + 1
            })
        }}>Change Age</button>
         <button onClick={() => {
            this.setState({
                name: this.state.name + "..."
            })
        }}>Change Name</button>
      </div>
    )
  }
}
