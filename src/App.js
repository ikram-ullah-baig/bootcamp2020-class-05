import './App.css';
import Parent from "./Parent";
import React, { useState } from "react";


function App() {
  let [number, setNumber] = useState(55);
  return (
    <div>
      Hello World!
      <Parent num={number}></Parent>
      <button onClick={() =>{setNumber(++number)} }>Update Number</button>
    </div>
  );
}

export default App;
