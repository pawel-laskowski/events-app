import database from '../firebase/firebase'

export const AddEvent = (event) => ({
  type: 'ADD_EVENT',
  event
})

export const startAddEvent = (eventData = {}) => {
  return (dispatch) => {
    const {
      title = '',
      note = '',
      organizer = '',
      location = '',
      startDate = 0,
      endDate = 0,
      category = '',
      photo = ''
    } = eventData

    const event = {title, note, organizer, location, startDate, endDate, category, photo}
    
    return database.ref('events').push(event).then((ref) => {
      dispatch(AddEvent({
        id: ref.key,
        ...event
      }))
    }) 
  }
}

export const editEvent = (id, updates) => ({
  type: 'EDIT_EVENT',
  id,
  updates
})

export const startEditEvent = (id, updates) => {
  return (dispatch) => {
    return database.ref(`events/${id}`).update(updates).then(() => {
      dispatch(editEvent(id, updates))
    })
  }
}

export const removeEvent = ({ id } = {}) => ({
  type: 'REMOVE_EVENT',
  id
})

export const startRemoveEvent = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`events/${id}`).remove().then(() => {
      dispatch(removeEvent({ id }))
    })
  }
}

export const setEvents = (events) => ({
  type: 'SET_EVENTS',
  events
})

export const startSetEvents = () => (dispatch, getState) => {
  return database.ref('events').once('value').then((snapshot) => {
    const events = []

    snapshot.forEach((childSnapshot) => {
      events.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      })
    })

    dispatch(setEvents(events))
  })
}