import React from 'react'
import { connect } from 'react-redux'
import EventForm from './EventForm'
import { startAddEvent } from '../actions/events'

export class AddEventPage extends React.Component {
    
    onSubmit = (event) => {
        this.props.startAddEvent(event)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="content-container">
                <EventForm 
                    onSubmit={this.onSubmit}
                    auth={this.props.auth}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    startAddEvent: (event) => dispatch(startAddEvent(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEventPage)