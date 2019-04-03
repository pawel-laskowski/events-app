import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogin, startLogout } from '../actions/auth'

export class Header extends React.Component {

    openMessage = () => {
        const message = document.querySelector(".header__login__message")
        message.style.display = "block"
    }

    render () {
        return (
            <header className="header">
                <div className="content-container">
                    <div className="header__content">
                        <Link className="header__title" to="/">
                            <h1>EVENTS</h1>
                        </Link>
                        {
                            this.props.auth.uid ? (
                                <div>
                                    <span>Hello, {this.props.auth.displayName.split(' ')[0]}!</span>
                                    <img className="header__userimg" src={this.props.auth.photoURL}></img>
                                    <button className="button button--link" onClick={this.props.startLogout}>Logout</button>
                                    <Link className="button" to="/create">Add Event</Link>
                                </div>
                            ) : (
                                    <div>
                                        <button className="button button--link button--login" onClick={this.props.startLogin}>Login</button>
                                        <p className="header__login__message">Login to add event</p>
                                        <Link className="button" onMouseMove={this.openMessage} onMouseOut={this.closeMessage} to="/">Add Event</Link>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLogout: () => dispatch(startLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
