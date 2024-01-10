import React, { Component, memo, useCallback, useState } from 'react'
import NameComponent from './NameComponent'
import AgeComponent from './AgeComponent'

const MemoAgeComponent = memo(AgeComponent); // HOC
const MemoNameComponent = memo(NameComponent); //HOC
export default function ParentComponent() {
  let [name, setName] = useState("Roger");
  let [age, setAge] = useState(24);

  let updateName = useCallback((name) => {
    setName(name);
  }, [name]);

  let updateAge = useCallback((age) => {
    setAge(age);
  }, [age]);

  console.log("Parent renders...");
  return (
    <div>
      Name: {name} <br />
      Age: {age} <br />
      <MemoNameComponent name={name} updateNameCb={updateName} /> <br />
      <MemoAgeComponent age={age} updateAgeCb={updateAge} /> <br />

    </div>
  )
}

