import moment from 'moment'

const filtersReducerDefaultState = {
    text: '',
    location: '',
    category: '',
    startDate: null,
    endDate: null
}

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_LOCATION_FILTER':
            return {
                ...state,
                location: action.location
            }
        case 'SET_CATEGORY_FILTER':
            return {
                ...state,
                category: action.category
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}