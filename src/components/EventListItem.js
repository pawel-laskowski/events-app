import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export const EventListItem = ({title, location, startDate, endDate, photo}) => (
    <div className="list-item">
        <div>
            <h3 className="">{title}</h3>
            <h2>{location}</h2>
            <span className="">
                {moment(startDate).format("MMMM Do YYYY")}-{moment(endDate).format("MMMM Do YYYY")}
            </span>
        </div>
        <Link to={`/`}>
            <img src={photo} width="300px" height="200px" />
        </Link>
    </div>

)

export default EventListItem