

const initialState: InitialStateType = {
    num: 0,
    maxValue: 1,
    minValue: 0,
    disabled: false
}

export type InitialStateType = {
  num: number
  maxValue: number
  minValue: number
  disabled: boolean
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType) => {
  switch (action.type) {

    case "BUTTON_CLICK_NUMBER": {
      return {
        ...state,
        num: state.num + 1
      }
    }

    case "BUTTON_RESET": {
        return {
          ...state,
          maxValue: 1,
          minValue: 0,
          num: 0
        }
    }

    case "SET_DISABLED": {
      return {
        ...state,
        disabled: true
      }
    }
  }
}

type ActionType =
    | ReturnType<typeof buttonClickNumberAC>
    | ReturnType<typeof resetClickAC>
    | ReturnType<typeof setDisabled>

export const buttonClickNumberAC = () => {
    return {
      type: 'BUTTON_CLICK_NUMBER'
    }as const
}

export const resetClickAC = () => {
  return {
    type: 'BUTTON_RESET'
  } as const
}

export const setDisabled = () => {
  return {
    type: 'SET_DISABLED'
  } as const
}

export type PropsType = {
  number: number
  setNumber: (value: number) => void
  disabled: boolean
  disabled2: boolean
  minVal: number
  maxVal: number
  resetClick: () => void
  setDisabled: (e: boolean) => void
  setDisabled2: (e: boolean) => void
}

