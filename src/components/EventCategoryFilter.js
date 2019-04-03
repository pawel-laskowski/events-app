import React from 'react'
import { connect } from 'react-redux'

import { setCategoryFilter } from '../actions/filters'

class EventCategoryFilter extends React.Component {

    onCategoryChange = (e) => {
        console.log(e.target);
        e.target.classList.toggle('panel-active')
        this.props.setCategoryFilter(e.target.value)
    }

    render () {
        return (
            <div>
                <h1>Select category</h1>
                <div className="panels">
                    <button className="panel panel__sport" onClick={this.onCategoryChange} value="sport">Sport</button>
                    <button className="panel panel__science" onClick={this.onCategoryChange} value="science">Science</button>
                    <button className="panel panel__music" onClick={this.onCategoryChange} value="music">Music</button>
                    <button className="panel panel__travel" onClick={this.onCategoryChange} value="travel">Travel</button>
                    <button className="panel panel__other" onClick={this.onCategoryChange} value="other">Other</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setCategoryFilter: (category) => dispatch(setCategoryFilter(category))
})
export default connect(mapStateToProps, mapDispatchToProps)(EventCategoryFilter)