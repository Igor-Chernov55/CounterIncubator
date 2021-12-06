import {connect} from "react-redux";
import {Counter} from "./Counter";
import {Dispatch} from "redux";
import {buttonClickNumberAC, resetClickAC, setDisabled} from "../Redux/CounterReducer";
import {AppStateType} from "../Redux/Redux-store";

export type StateCounterType = {
    number: number
    maxValue:number
    minValue: number
    disabled: boolean
}

export type DispatchCounterType = {
    buttonClickNumber: () => void
    resetClick: () => void
    setDisabled: () => void
}

export type CounterPropsType = StateCounterType & DispatchCounterType

const mapStateCounter = (state: AppStateType): StateCounterType => {
    return {
        number: state.counterReduce.num,
        maxValue: state.counterReduce.maxValue,
        minValue: state.counterReduce.minValue,
        disabled: state.counterReduce.disabled
    }
}

const mapDispatchCounter = (dispatch: Dispatch): DispatchCounterType => {
    return {
        buttonClickNumber: () => {
            dispatch(buttonClickNumberAC())
        },
        resetClick: () => {
            dispatch(resetClickAC())
        },
        setDisabled: () => {
            dispatch(setDisabled())
        }
    }
}

export const ContainerCounter = connect(mapStateCounter, mapDispatchCounter)(Counter)