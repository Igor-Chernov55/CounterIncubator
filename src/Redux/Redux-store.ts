import {combineReducers, createStore} from "redux";
import {counterReducer} from "./CounterReducer";

export const rootReducer = combineReducers({
    counterReduce: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const storeRedux = createStore(rootReducer)

export default storeRedux