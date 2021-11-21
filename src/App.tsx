import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./CounterNumbers/Counter";
import {CounterTask} from "./CounterNumbers/CounterTask/CounterTask";

function App() {
    let [num, setNum] = useState(0)

    let [disabled, setDiasbled] = useState(false)
    let [disabled2, setDiasbled2] = useState(true)

    const ButtonClickForNumber = () => {

        setNum(num + 1)
        if (num >= 4) {
            setDiasbled(true)
        }
        setDiasbled2(false)

    }

    const resetClick = () => {
        setNum(0)

        setDiasbled(false)

        setDiasbled2(true)

    }

    useEffect(() => {
        console.log('SYNCE')
        if (num >= -1){

        }

    },[])

    return (
        <>
            <Counter
                number={num}
                ButtonClickForNumber={ButtonClickForNumber}
                resetClick={resetClick}
                disabled={disabled}
                disabled2={disabled2}/>

            <CounterTask

                disabled={disabled}
                disabled2={disabled2}/>
        </>
    );
}

export default App;
