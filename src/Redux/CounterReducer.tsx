


type CounterReducerType = {
  counter: PropsType
}

export const counterReducer = (state: CounterReducerType, action: ActionType) => {
  switch (action.type) {
    case "BUTTON_CLICK_NUMBER": {
      return  state.counter.setNumber(state.counter.number + 1)

      if (state.counter.maxVal === state.counter.number + 1) {
        state.counter.setDisabled(true)
      }
      state.counter.setDisabled2(false)

    }

    case "BUTTON_RESET": {
      return  state.counter.setNumber(state.counter.minVal)
      state.counter.setDisabled(false)
      state.counter.setDisabled2(true)
    }

  }

}

type ActionType =
    | ReturnType<typeof buttonClickNumberAC>
    | ReturnType<typeof resetClickAC>

export const buttonClickNumberAC = () => {
    return {
      type: 'BUTTON_CLICK_NUMBER'
    }as const
}

export const resetClickAC = () => {
  return {
    type: 'BUTTON_RESET'
  }as const

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

