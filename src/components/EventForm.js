import React from 'react'
import moment from 'moment'
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize'

export default class EventForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.event ? props.event.title : '',
            note: props.event ? props.event.note : '',
            organizer: props.event ? props.event.organizer : '',
            location: props.event ? props.event.location : '',
            startDate: props.event ? moment(props.event.startDate) : moment(),
            endDate: props.event ? moment(props.event.endDate) : moment(),
            category: props.event ? props.event.category : '',
            photo: props.event ? props.event.photo : '',
            calendarFocused: null,
            error: undefined
        }
    }

    onTitleChange = (e) => {
        const title = e.target.value
        this.setState(() => ({ title }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onOrganizerChange = (e) => {
        const organizer = e.target.value
        this.setState(() => ({ organizer }))
    }
    onLocationChange = (e) => {
        const location = e.target.value
        this.setState(() => ({ location }))
    }
    onCategoryChange = (e) => {
        const category = e.target.value
        this.setState(() => ({ category }))
    }
    onPhotoChange = (e) => {
        const photo = e.target.value
        this.setState(() => ({ photo }))
    }
    onDatesChange = ({ startDate, endDate }) => {
        if (startDate) {
            this.setState(() => ({ startDate }))
        }
        if (endDate) {
            this.setState(() => ({ endDate }))
        }
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    // onFocusChange = ({ focused }) => {
    //     this.setState(() => ({ calendarFocused: focused }))
    // }

    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.title || !this.state.location) {
            this.setState(() => ({ error: 'Please fill up the form!' }))
        } else {
            this.setState(() => ({ error: undefined }))
            console.log(this.state);
            
            // this.props.onSubmit({
            //     description: this.state.description,
            //     amount: parseFloat(this.state.amount, 10) * 100,
            //     createdAt: this.state.createdAt.valueOf(),
            //     note: this.state.note
            // })
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Title"
                    autoFocus
                    className="text-input"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <input
                    type="text"
                    placeholder="Organizer"
                    className="text-input"
                    value={this.state.organizer}
                    onChange={this.onOrganizerChange}
                />
                <input
                    type="text"
                    placeholder="Location"
                    className="text-input"
                    value={this.state.location}
                    onChange={this.onLocationChange}
                />
                <DateRangePicker
                    startDate={this.state.startDate}
                    startDateId={"start"}
                    endDate={this.state.endDate}
                    endDateId={"end"}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    minimumNights={0}
                    isOutsideRange={() => false}
                />
                <textarea
                    placeholder="Add a note for your event (optional)"
                    className="textarea"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className="button">
                        Save Event
                    </button>
                </div>
            </form>
        )
    }
}