import React, {useState} from 'react';
import './App.css';
import {Counter} from "./CounterNumbers/Counter";

function App() {
    let [num, setNum] = useState(0)

  let [disabled, setDiasbled] = useState(false)
  let [disabled2, setDiasbled2] = useState(true)

  const ButtonClickForNumber = () => {
     setNum(num + 1)
    if (num >=  4 ) {
      // setNum(num)
      setDiasbled(true)
    }
      setDiasbled2(false)

  }

  const resetClick = () => {
    setNum(0  )

    setDiasbled(false)

    setDiasbled2(true)

  }

  return (
    <Counter  number={num} ButtonClickForNumber={ButtonClickForNumber} resetClick={resetClick} disabled={disabled} disabled2={disabled2}/>
  );
}

export default App;
