import moment from 'moment'

export default (events, { text, location, category, startDate, endDate}) => {
    return events.filter((event) => {
        const eventStartDate = moment(event.startDate)
        const eventEndDate = moment(event.endDate)
        const startDateMatch = startDate ? startDate.isSameOrBefore(eventStartDate, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(eventEndDate, 'day') : true
        const textMatch = event.title.toLowerCase().includes(text.toLowerCase())
        const locationMatch = event.location.toLowerCase().includes(location.toLowerCase())
        const categoryMatch = event.category.toLowerCase().includes(category.toLowerCase())

        return startDateMatch && endDateMatch && textMatch && locationMatch && categoryMatch
    }).sort((a, b) => a.startDate < b.startDate ? 1 : -1)
}