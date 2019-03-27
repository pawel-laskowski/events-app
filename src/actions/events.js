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
