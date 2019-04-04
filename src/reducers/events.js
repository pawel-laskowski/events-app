const eventsReducerDefaultState = []

const eventsReducer = (state = eventsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        action.event
      ]
    case 'EDIT_EVENT':
      return state.map(event => event.id === action.id ? {...event, ...action.updates} : event)
    case 'REMOVE_EVENT':
      return state.filter(event => event.id !== action.id)
    case 'SET_EVENTS':
      return action.events
    default:
      return state
  }
}

export default eventsReducer