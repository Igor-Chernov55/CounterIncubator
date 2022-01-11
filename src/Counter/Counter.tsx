import React from 'react';
import classes from './CounterStyle.module.css'

type PropsType = {
    number: number
    disabled1: boolean
    numZero: () => void
    setNumber: () => void
    minValue: number
}

const Counter = (props: PropsType) => {

    return (
        <div className={classes.container}>
            <div className={classes.containerCounter}>
                <div className={props.disabled1 ? classes.numberCounterUn : classes.numberCounter}>
                    <div>{props.number}</div>
                </div>
                <div className={classes.buttonDown}>
                    <button onClick={props.numZero}>set</button>
                    <button disabled={props.disabled1} onClick={props.setNumber}>inc</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;