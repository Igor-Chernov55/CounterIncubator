import React from 'react'
import classes from './Counter.module.css'

type PropsType = {
    number: number
    disabled: boolean
    disabled2: boolean
    ButtonClickForNumber: () => void
    resetClick: () => void
}

export const Counter: React.FC<PropsType> = ({number,disabled,disabled2,...props}) => {

   return (
       <div className={classes.main}>
            <div className={classes.container}>
                <button className={disabled ? classes.buttonNumd : classes.buttonNum} >{number}</button>
                <div className={classes.containerButton}>
                    <button className={disabled ? classes.buttonNumEnd: classes.button} disabled={disabled} onClick={props.ButtonClickForNumber}>inc</button>
                    <button className={!disabled2 ? classes.button: classes.buttonNumEnd} disabled={disabled2} onClick={props.resetClick}>reset</button>
                </div>
            </div>
       </div>
   )
}