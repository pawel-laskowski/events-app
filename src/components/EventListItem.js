import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import { startRemoveEvent } from '../actions/events'

export class EventListItem extends React.Component {

    onRemove = () => {
        this.props.startRemoveEvent({id: this.props.id})
    }
    
    render() {
        return (
            <div className="list-item">
                <div>
                    <h3 className="">{this.props.title}</h3>
                    <h2>{this.props.location}</h2>
                    <span className="">
                        {moment(this.props.startDate).format("MMMM Do YYYY")}-{moment(this.props.endDate).format("MMMM Do YYYY")}
                    </span>
                </div>
                <Link to={`/`}>
                    <img src={this.props.image} width="300px" height="200px" />
                </Link>
                {
                    this.props.auth.uid && this.props.auth.uid === this.props.organizer.uid ? 
                    (
                        <div>
                            <Link className="list-item" to={`/edit/${this.props.id}`}>
                                <button className="button" onClick={this.onEdit}>Edit</button>
                            </Link>
                            <button className="button" onClick={this.onRemove}>Remove</button>
                        </div>

                    ) : (
                        <div>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    startRemoveEvent: (data) => dispatch(startRemoveEvent(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventListItem)