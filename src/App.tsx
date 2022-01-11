import React from 'react';
import Counter from "./Counter/Counter";
import classes from './App.module.css'
import CounterTask from "./Counter/CounterTask";
import {useDispatch, useSelector} from "react-redux";
import {CounterType, numberInc, numberZero} from "./Redux/CounterReducer";
import {AppStateType} from "./Redux/Counter-store";

export const App = () => {

    const dispatch = useDispatch()
    const counter = useSelector<AppStateType, CounterType>(state => state.CounterReducer)

    const setNumber = () => {
        dispatch(numberInc())
    }

    const numZero = () => {
        dispatch(numberZero())
    }

    return (
        <div className={classes.main}>
            <CounterTask
                number={counter.number}
                maxValue={counter.maxValue}
                minValue={counter.minValue}
                disabled2={counter.disabled2}
                disabled1={counter.disabled1}
            />
            <Counter
                setNumber={setNumber}
                numZero={numZero}
                number={counter.number}
                minValue={counter.minValue}
                disabled1={counter.disabled1}
            />
        </div>
    );
};
