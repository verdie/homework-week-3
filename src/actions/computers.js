export const ADD_COMPUTER ='ADD_COMPUTER'

export function addComputer(computer) {
    return {
      type: ADD_COMPUTER,
      payload: computer
    }
  }