import React from 'react'
import moment from 'moment'
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize'

export default class EventForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.event ? props.event.title : '',
            organizer: props.event ? props.event.organizer : props.auth,
            location: props.event ? props.event.location : '',
            startDate: props.event ? moment(props.event.startDate) : moment(),
            endDate: props.event ? moment(props.event.endDate) : moment(),
            category: props.event ? props.event.category : '',
            image: props.event ? props.event.image : '',
            note: props.event ? props.event.note : '',
            calendarFocused: null,
            error: undefined
        }
    }
    
    testImgURL = (url, timeoutT) => {
        return new Promise((resolve, reject) => {
            const timeout = timeoutT || 5000;
            let timer, img = new Image();
            img.onerror = img.onabort = () => {
                clearTimeout(timer);
                reject("error");
            };
            img.onload = () => {
                clearTimeout(timer);
                resolve("success");
            };
            timer = setTimeout(() => {
                // reset .src to invalid URL so it stops previous
                // loading, but doesn't trigger new load
                img.src = "//!!!!/test.jpg";
                reject("timeout");
            }, timeout);
            img.src = url;
        });
    }

    onTitleChange = (e) => {
        const title = e.target.value
        this.setState(() => ({ title }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onLocationChange = (e) => {
        const location = e.target.value
        this.setState(() => ({ location }))
    }
    onCategoryChange = (e) => {
        const category = e.target.value
        this.setState(() => ({ category }))
    }
    onImageChange = (e) => {
        const image = e.target.value
        this.testImgURL(image).then(() => {
            this.setState(() => ({ image }))
        }).catch((error) => {
            this.setState(() => ({ error: 'Invalid image URL' }))
        })
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

    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.title || !this.state.location || !this.state.category) {
            this.setState(() => ({ error: 'Please complete the entire form!' }))
        } else {
            this.setState({ error: undefined })
            this.props.onSubmit({
                title: this.state.title,
                organizer: this.state.organizer,
                location: this.state.location,
                startDate: this.state.startDate.valueOf(),
                endDate: this.state.endDate.valueOf(),
                category: this.state.category,
                image: this.state.image,
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
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
                    placeholder="Location"
                    className="text-input"
                    value={this.state.location}
                    onChange={this.onLocationChange}
                />
                <select
                    className="select"
                    onChange={this.onCategoryChange}
                    defaultValue={this.state.category}
                >
                    <option value="" disabled> -- Category -- </option>
                    <option value='sport'>Sport</option>
                    <option value='music'>Music</option>
                    <option value='science'>Science</option>
                    <option value='travel'>Travel</option>
                    <option value='other'>Other</option>
                </select>

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
                    displayFormat="DD/MM/YYYY"
                    isOutsideRange={() => false}
                />
                <input
                    type="text"
                    placeholder="Paste URL of your event image"
                    className="text-input"
                    value={this.state.image}
                    onChange={this.onImageChange}
                />
                <textarea
                    placeholder="Add a note for your event (optional)"
                    className="textarea"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <div>
                    <button className="button">
                        Save Event
                    </button>
                </div>
            </form>
        )
    }
}