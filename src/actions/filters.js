export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

export const setLocationFilter = (location = '') => ({
    type: 'SET_LOCATION_FILTER',
    location
})

export const setCategoryFilter = (category = 'ALL') => ({
    type: 'SET_CATEGORY_FILTER',
    category
})

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})