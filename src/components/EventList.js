import React from 'react'
import { connect } from 'react-redux'
import EventListItem from './EventListItem'
import selectEvents from '../selectors/events'


export const EventList = (props) => (
    <div className="content-container">
        <h3 className="list-header">Choose your event</h3>
        <div className="list-body">
            {
                props.events.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No events</span>
                    </div>
                ) : (
                        props.events.map((event) => (
                            <EventListItem key={event.id} {...event} />
                        ))
                    )
            }        
        </div>

    </div>
)

const mapStateToProps = (state) => ({
    events: selectEvents(state.events, state.filters)
})

export default connect(mapStateToProps)(EventList)