const eventsReducerDefaultState = []

const eventsReducer = (state = eventsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        action.event
      ]
    default:
      return state
  }
}

export default eventsReducer