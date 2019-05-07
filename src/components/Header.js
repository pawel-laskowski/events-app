import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogin, startLogout } from '../actions/auth'

export class Header extends React.Component {

    openMessage = () => {
        const message = document.querySelector(".header__login-message")
        message.style.display = "block"
        setTimeout(() => {
            message.style.display = "none"
        }, 1000)

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
                                <div className= "header__login-box">
                                    <p className="header__user-message">Hello, {this.props.auth.displayName.split(' ')[0]}!</p>
                                    <img className="header__user-img" src={this.props.auth.photoURL}></img>
                                    <button className="button button--link" onClick={this.props.startLogout}>Logout</button>
                                    <Link className="button" to="/create">Add Event</Link>
                                </div>
                            ) : (
                                    <div>
                                        <button className="button button--link button--login" onClick={this.props.startLogin}>Login</button>
                                        <div className="header__login-message">Login to add event</div>
                                        <Link className="button button--disabled" onMouseMove={this.openMessage} onMouseOut={this.closeMessage} disabled={true} to="/">Add Event</Link>
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
