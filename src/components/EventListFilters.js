import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, setLocationFilter, setCategoryFilter, setStartDate, setEndDate } from '../actions/filters'
import EventCategoryFilter from './EventCategoryFilter';

export class EventListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    onLocationChange = (e) => {
        this.props.setLocationFilter(e.target.value)
    }


    render() {
        return (
            <div className="content-container">
                <EventCategoryFilter />
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type='text'
                            className="text-input"
                            placeholder="Search event"
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <input
                            type='text'
                            className="text-input"
                            placeholder="Search location"
                            value={this.props.filters.location}
                            onChange={this.onLocationChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker

                            startDate={this.props.filters.startDate}
                            startDateId={"start"}
                            endDate={this.props.filters.endDate}
                            endDateId={"end"}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            minimumNights={0}
                            displayFormat="DD/MM/YYYY"
                            isOutsideRange={() => false}
                        /> 
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    filters: state.filters    
})

const mapDispatchToProps = (dispatch) => ({

    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setLocationFilter: (location) => dispatch(setLocationFilter(location)),
    setCategoryFilter: (category) => dispatch(setCategoryFilter(category)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))

})
export default connect(mapStateToProps, mapDispatchToProps)(EventListFilters)