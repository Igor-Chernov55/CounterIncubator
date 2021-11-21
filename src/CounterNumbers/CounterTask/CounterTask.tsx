import React from 'react';
import classes from './CouterTask.module.css'

type PropsType = {
    disabled: boolean;
    disabled2: boolean;
}

export const CounterTask = () => {
    return (
        <div>
            <div>
                <div>
                    <span>Max value</span>
                    <input
                        type="number"
                        id="tentacles"
                        name="max value"
                        min="-1"
                        max="100"/>
                </div>
                <div>
                    <span>Min value</span>
                    <input
                        type="number"
                        id="tentacles"
                        name="start value"
                        min="-1"
                        max="100"/>
                </div>
            </div>
            <div>
                <button>SET</button>
            </div>
        </div>
    );
};

