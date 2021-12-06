import {connect} from "react-redux";
import {Counter} from "./Counter";
import {Dispatch} from "redux";
import {buttonClickNumberAC, resetClickAC} from "../Redux/CounterReducer";
import {AppStateType} from "../Redux/Redux-store";

export type StateCounterType = {
    counter: AppStateType
}

export type DispatchCounterType = {
    buttonClickNumber: () => void
    resetClick: () => void
}

export type CounterPropsType = StateCounterType & DispatchCounterType

const mapStateCounter = (state: AppStateType): StateCounterType => {
    return {
        counter: state.counterReduce
    }
}

const mapDispathCounter = (dispatch: Dispatch): DispatchCounterType => {
    return {
        buttonClickNumber: () => {
            dispatch(buttonClickNumberAC())
        },
        resetClick: () => {
            dispatch(resetClickAC())
        }
    }
}

export const ContainerCounter = connect(mapStateCounter, mapDispathCounter)(Counter)