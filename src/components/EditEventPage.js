import React from 'react'
import { connect } from 'react-redux'
import EventForm from './EventForm'
import { startEditEvent } from '../actions/events'

export class EditEventPage extends React.Component {

    onSubmit = (event) => {
        this.props.startEditEvent(this.props.event.id, event)
        this.props.history.push('/')
    }

    render() {
        return (
            <EventForm 
                onSubmit={this.onSubmit}
                event={this.props.event}
            />
        )
    }
}

const mapStateToProps = (state, props) => ({
    event: state.events.find((event) => event.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
    startEditEvent: (id, event) => dispatch(startEditEvent(id, event))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditEventPage)