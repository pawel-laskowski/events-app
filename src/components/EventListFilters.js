import React from 'react'
import { connect } from 'react-redux'
import { DataRangePicker } from 'react-dates'
import { setTextFilter } from '../actions/filters'

export class EventListFilters extends React.Component {


    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }


    render() {
        return (
            <div className="content-container">
                <input
                    type='text'
                    className="text-input"
                    placeholder="Search events"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({

    setTextFilter: (text) => dispatch(setTextFilter(text))

})
export default connect(mapStateToProps, mapDispatchToProps)(EventListFilters)