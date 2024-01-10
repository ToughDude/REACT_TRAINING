import React, { Component, memo, useCallback, useState } from 'react'
import MemoNameComponent from './NameComponent'
import MemoAgeComponent from './AgeComponent'


export default function ParentComponent() {
  let [name, setName] = useState("Roger");
  let [age, setAge] = useState(24);

  let updateName = useCallback((name) => {
    setName(name);
  }, [name]);

  let updateAge = useCallback((age) => {
    setAge(age);
  }, []);

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

