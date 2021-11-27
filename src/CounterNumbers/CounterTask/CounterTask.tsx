import React, {ChangeEventHandler} from 'react';
import classes from './CouterTask.module.css'

type PropsType = {
    number: number
    minVal: number
    maxVal: number
    setNumber: (value: number) => void
    setMaxVal: (value: number) => void
    setMinVal: (value: number) => void
    setDisabled: (e: boolean) => void
    setDisabled2: (e: boolean) => void

}

export const CounterTask = (props: PropsType) => {

    const onChangeHandlerMax: ChangeEventHandler<HTMLInputElement> = (e) => {
        props.setMaxVal(+e.currentTarget.value)
    }

    const onChangeHandlerMin: ChangeEventHandler<HTMLInputElement> = (e) => {
        props.setMinVal(+e.currentTarget.value)
    }

   const CounterTaskCallback = () => {
        props.setNumber(props.minVal)
        if (props.maxVal === props.minVal) {
            props.setDisabled(true)
        }
        props.setDisabled2(false )
    }

    return (
        <div className={classes.container}>
            <div className={classes.taskBlock}>
                <div className={classes.task}>

                    <div
                        className={props.minVal === props.maxVal || props.minVal < 0 ? classes.incorrectFalse : classes.incorrectTrue}>Incorrect
                        value
                    </div>

                    <span className={classes.spanText}>Max value</span>
                    <input
                        type="number"
                        id="01"
                        name="max value"
                        value={props.maxVal}
                        onChange={onChangeHandlerMax}
                    />
                </div>
                <div className={classes.task}>

                    <div
                        className={props.minVal === props.maxVal || props.minVal < 0 ? classes.incorrectFalse : classes.incorrectTrue}>Incorrect
                        value
                    </div>

                    <span className={classes.spanText}>Min value</span>
                    <input
                        type="number"
                        id="02"
                        name="start value"
                        onChange={onChangeHandlerMin}
                        value={props.minVal}
                    />
                </div>
                <div className={classes.setBlock}>
                    <button disabled={props.minVal === props.maxVal || props.minVal < 0 || props.maxVal < 0} onClick={CounterTaskCallback}>SET</button>
                </div>
            </div>

        </div>
    );
};

