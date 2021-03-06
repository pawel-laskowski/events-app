import React from 'react'
import { connect } from 'react-redux'

import { setCategoryFilter } from '../actions/filters'

class EventCategoryFilter extends React.Component {

    onCategoryReset = () => {
        document.querySelectorAll('.panel').forEach(e => e.classList.remove('panel-active'))
        this.props.setCategoryFilter('')
    }

    onCategoryChange = (e) => {
        document.querySelectorAll('.panel').forEach(e => e.classList.remove('panel-active'))
        e.target.classList.add('panel-active')
        this.props.setCategoryFilter(e.target.value)
    }

    render () {
        return (
            <div>
                { 
                    this.props.filters.category ? 
                    (
                        <div onClick={this.onCategoryReset}>
                            <h1>Show all</h1>
                        </div>
                    ) : (
                        <h1>Select category</h1>
                    )
                }
                <div className="panels">
                    <button className="panel panel__sport" onClick={this.onCategoryChange} value="sport"></button>
                    <button className="panel panel__science" onClick={this.onCategoryChange} value="science"></button>
                    <button className="panel panel__music" onClick={this.onCategoryChange} value="music"></button>
                    <button className="panel panel__travel" onClick={this.onCategoryChange} value="travel"></button>
                    <button className="panel panel__other" onClick={this.onCategoryChange} value="other"></button>
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