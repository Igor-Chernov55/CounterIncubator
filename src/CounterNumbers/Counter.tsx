import React from 'react'
import classes from './Counter.module.css'

 export type PropsType = {
     number: number
     setNumber: (value: number) => void
     disabled: boolean
     disabled2: boolean
     minVal: number
     maxVal: number
     counter: () => void
     resetClick: () => void
     setDisabled: (e: boolean) => void
     setDisabled2: (e: boolean) => void
 }

export const Counter = (props : PropsType) => {

    const resetClickHandler = () => {
        props.resetClick()
    }

    const counterHandler = () => {
        props.counter()
    }

    return (
        <div>
            <div className={classes.container}>
                <span className={props.disabled ? classes.buttonNumd : classes.buttonNum}>
                    {props.counter.number}

                </span>
                <div className={classes.containerButton}>
                    <button className={disabled ? classes.buttonNumEnd : classes.button}
                            disabled={disabled}
                            onClick={counterHandler}
                                >
                        inc
                    </button>

                    <button className={!disabled2 ? classes.button : classes.buttonNumEnd}
                            disabled={disabled2}
                            onClick={resetClickHandler}>
                        reset
                    </button>
                </div>
            </div>
        </div>
    )
}