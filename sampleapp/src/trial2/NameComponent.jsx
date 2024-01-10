import React, { Component } from 'react'

export default function NameComponent(props) {

  console.log("Name renders...")
  return (
    <div>
      Name in NameComponent: {props.name}
      <button type="button" onClick={() => props.updateNameCb(props.name + " ...")}>
        Change Name
      </button>
    </div>
  )
}

