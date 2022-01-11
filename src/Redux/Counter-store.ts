import {combineReducers, createStore} from "redux";
import {counterReducer} from "./CounterReducer";

export const rootReducer = combineReducers({
    CounterReducer: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const reduxStore = createStore(rootReducer)

// @ts-ignore
window.reduxStore = reduxStore