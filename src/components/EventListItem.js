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
                <h3 className="list-item__title">{this.props.title}</h3>
                <img className="list-item__image" src={this.props.image}/>
                <div className="list-item__data">
                    <img className="list-item__icon" src={require('../../public/images/location.png')} />
                    <p className="list-item__text">{this.props.location}</p>
                </div>
                <div className="list-item__data">
                    <img className="list-item__icon" src={require('../../public/images/date.png')} />
                    <p className="list-item__text">
                        {moment(this.props.startDate).format("DD/MM/YYYY")} - {moment(this.props.endDate).format("DD/MM/YYYY")}
                    </p>
                </div>

                <div className={"list-item__" + this.props.category}>
                    {
                        this.props.auth.uid && this.props.auth.uid === this.props.organizer.uid ? 
                        (
                                <div className="list-item__buttons">
                                <Link to={`/edit/${this.props.id}`}>
                                    <button className="button" onClick={this.onEdit}>Edit</button>
                                </Link>
                                <button className="button button--secondary" onClick={this.onRemove}>Remove</button>
                            </div>

                        ) : (
                            <div className="list-item__buttons">
                            </div>
                        )
                    }                
                </div>

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