import React from 'react'
import { connect } from 'react-redux'
import { setSearchText } from '../actions/filters'


const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text"
      placeholder="search content"
      value={props.filters.text}
      onChange={(e) => props.dispatch(setSearchText(e.target.value))}
    />
  </div>
)

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)