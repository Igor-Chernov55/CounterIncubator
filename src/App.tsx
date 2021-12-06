import React, {useState} from 'react';
import './App.css';
import {Counter} from "./CounterNumbers/Counter";
import {CounterTask} from "./CounterNumbers/CounterTask/CounterTask";
import classes from './CounterNumbers/Counter.module.css'
import {ContainerCounter} from "./CounterNumbers/ContainerCounter";

function App() {
    let [num, setNum] = useState(0)

    let [maxVal, setMaxVal] = useState(1)
    let [minVal, setMinVal] = useState(0)

    let [disabled, setDiasbled] = useState<boolean>(false)
    let [disabled2, setDiasbled2] = useState<boolean>(true)

    const buttonClickForNumber = () => {
        setNum(num + 1)

        if (maxVal === num + 1) {
            setDiasbled(true)
        }
        setDiasbled2(false)

    }

    const resetClick = () => {
        setNum(minVal)
        setDiasbled(false)
        setDiasbled2(true)
    }


    return (
        <div className={classes.main}>
            <CounterTask
                number={num}
                setNumber={setNum}
                minVal={minVal}
                maxVal={maxVal}
                setMaxVal={setMaxVal}
                setMinVal={setMinVal}
                setDisabled={setDiasbled}
                setDisabled2={setDiasbled2}
            />


            <ContainerCounter />
            {/*<Counter*/}
            {/*    number={num}*/}
            {/*    setNumber={setNum}*/}
            {/*    minVal={minVal}*/}
            {/*    maxVal={maxVal}*/}
            {/*    counter={buttonClickForNumber}*/}
            {/*    resetClick={resetClick}*/}
            {/*    disabled={disabled}*/}
            {/*    disabled2={disabled2}*/}
            {/*    setDisabled={setDiasbled}*/}
            {/*    setDisabled2={setDiasbled2}*/}
            {/*/>*/}


        </div>
    );
}

export default App;
