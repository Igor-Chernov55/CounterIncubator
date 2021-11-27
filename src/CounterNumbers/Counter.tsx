import React from 'react'
import classes from './Counter.module.css'

type PropsType = {
    number: number
    disabled: boolean
    disabled2: boolean
    minVal: number
    maxVal: number
    counter: () => void
    resetClick: () => void
    setDisabled: (e: boolean) => void
    setDisabled2: (e: boolean) => void
}

export const Counter = ({number, disabled, disabled2, ...props} : PropsType) => {


    return (
        <div>
            <div className={classes.container}>
                <span className={disabled ? classes.buttonNumd : classes.buttonNum}>
                    {number}

                </span>
                <div className={classes.containerButton}>
                    <button className={disabled ? classes.buttonNumEnd : classes.button}
                            disabled={disabled}
                            onClick={props.counter}
                                >
                        inc
                    </button>

                    <button className={!disabled2 ? classes.button : classes.buttonNumEnd}
                            disabled={disabled2}
                            onClick={props.resetClick}>
                        reset
                    </button>
                </div>
            </div>
        </div>
    )
}