import React, { Component } from 'react'

export default class NameComponent extends Component {
  render() {
    console.log("Name renders...")
    return (
      <div>Name: {this.props.name}</div>
    )
  }
}
