import React, {ChangeEventHandler} from 'react';
import classes from './CouterTask.module.css'

type PropsType = {
    setMaxVal: (value: string) => void
    setMinVal: (value: string) => void
    minVal: string
    maxVal: string
    error: boolean
    disabled: boolean;
    disabled2: boolean;
}

export const CounterTask = ({error,...props}: PropsType) => {

    const onChangeHandlerMax:ChangeEventHandler<HTMLInputElement> = (e) => {
        props.setMaxVal(e.currentTarget.value)
    }

    const onChangeHandlerMin:ChangeEventHandler<HTMLInputElement> = (e) => {
        props.setMinVal(e.currentTarget.max)
    }

    return (
        <div>
            <div>
                <div>
                    <div className={error ? classes.incorrectTrue : classes.incorrectFalse}>Incorrect value</div>
                    <span>Max value</span>
                    <input
                        type="number"
                        id="tentacles"
                        name="max value"
                        min="-1"
                        max="100"
                        value={props.maxVal}
                        onChange={onChangeHandlerMax}
                    />
                </div>
                <div>
                    <div className={error ? classes.incorrectTrue : classes.incorrectFalse}>Incorrect value</div>
                    <span>Min value</span>
                    <input
                        type="number"
                        id="tentacles"
                        name="start value"
                        min="-1"
                        max="100"
                        onChange={onChangeHandlerMin}
                        value={props.minVal}
                    />
                </div>
            </div>
            <div>
                <button>SET</button>
            </div>
        </div>
    );
};

