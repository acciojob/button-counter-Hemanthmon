
import { useState } from 'react';
import React from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const inc = () =>{
    setCount(count + 1);
  }
  return (
    <div>
        <p>Button clicked {count} times</p>
        <button> onClick={inc}click me</button>
    </div>
  )
}

export default App
