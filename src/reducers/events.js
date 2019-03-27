const eventsReducerDefaultState = []

const eventsReducer = (state = eventsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        action.expense
      ]
    default:
      return state
  }
}

export default eventsReducer