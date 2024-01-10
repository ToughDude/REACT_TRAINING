import React, { Component, memo } from 'react'

function NameComponent(props) {

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


export default memo(NameComponent); //HOC
