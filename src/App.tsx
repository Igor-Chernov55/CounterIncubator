import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./CounterNumbers/Counter";
import {CounterTask} from "./CounterNumbers/CounterTask/CounterTask";
import classes from './CounterNumbers/Counter.module.css'

function App() {
    let [num, setNum] = useState(0)

    let [maxVal, setMaxVal] = useState('')
    let [minVal, setMinVal] = useState('')

    let [disabled, setDiasbled] = useState(false)
    let [disabled2, setDiasbled2] = useState(true)
    let [error, setError] = useState(true)

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
        if (maxVal == minVal && minVal < '0') {
            setError(false)
        }else{
            setError(true)
        }

    },[])

    return (
        <div className={classes.main}>
            <Counter
                number={num}
                ButtonClickForNumber={ButtonClickForNumber}
                resetClick={resetClick}
                disabled={disabled}
                disabled2={disabled2}
            />

            <CounterTask
                minVal={minVal}
                setMaxVal={setMaxVal}
                setMinVal={setMinVal}
                maxVal={maxVal}
                error={error}
                disabled={disabled}
                disabled2={disabled2}/>
        </div>
    );
}

export default App;
