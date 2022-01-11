const InitialState: CounterType = {
    number: 0,
    maxValue: 1,
    minValue: 0,
    disabled1: false,
    disabled2: true,
}

export type CounterType = {
    number: number
    maxValue: number
    minValue: number
    disabled1: boolean
    disabled2: boolean
}

export const counterReducer = (state: CounterType = InitialState, action: ActionType): CounterType => {
    switch (action.type) {

        case "NUMBER-ZERO":
            return {
                ...state,
                number: state.minValue,
                disabled1: false
            }

        case "NUMBER-INC":
            if (state.number === state.maxValue)
                return  {
                    ...state,
                    number: state.number ++,
                    disabled1: true,
                    disabled2: false
                }
            else {
                return {
                    ...state,
                    number: state.number + 1,
                }
            }

        case "DISABLED1-TRUE":
            return {
                ...state,
                disabled1: true,
                disabled2: false
            }

        case "SET-NUMBER":
            return {
                ...state,
                number: action.setNum,
            }

        case 'SET-MIN-VALUE':
            return {
                ...state,
                minValue: action.minValue
            }
        case 'SET-MAX-VALUE':
            return {
                ...state,
                maxValue: action.setMax
            }
        default:
            return state
    }
}

type ActionType =
    | ReturnType<typeof numberInc>
    | ReturnType<typeof numberZero>
    | ReturnType<typeof setDisabled1True>
    | ReturnType<typeof setDisabled2False>
    | ReturnType<typeof setNumber>
    | ReturnType<typeof setMaxValue>
    | ReturnType<typeof setMinValue>

export const numberZero = () => {
    return {
        type: 'NUMBER-ZERO'
    } as const
}

export const numberInc = () => {
    return {
        type: 'NUMBER-INC',
    } as const
}

export const setDisabled1True = () => {
    return {
        type: 'DISABLED1-TRUE'
    } as const
}

export const setDisabled2False = () => {
    return {
        type: 'DISABLED2-FALSE'
    } as const
}

export const setNumber = (setNum: number) => {
    return {
        type: 'SET-NUMBER',
        setNum
    }as const
}

export const setMinValue = (minValue: number) => {
    return {
        type: 'SET-MIN-VALUE',
        minValue
    }as const
}


export const setMaxValue = (setMax: number) => {
    return {
        type: 'SET-MAX-VALUE',
        setMax
    } as const
}

