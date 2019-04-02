import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogin, startLogout } from '../actions/auth'

export const Header = ({startLogin, startLogout}) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>EVENTS</h1>
                </Link>
                <Link className="button" to="/create">Add Event</Link>
                <button className="button button--link" onClick={startLogout}>Logout</button>
                <button className="button" onClick={startLogin}>Login</button>   
            </div>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
