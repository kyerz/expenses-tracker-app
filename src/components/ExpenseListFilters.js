import React from 'react'
import { connect } from 'react-redux'
import { setSearchText } from '../actions/filters'
import { sortByDate, sortByAmount } from '../actions/filters'

const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text"
      placeholder="rechercher une dépense"
      value={props.filters.text}
      onChange={(e) => props.dispatch(setSearchText(e.target.value))}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'date') {
          props.dispatch(sortByDate())
        } else if (e.target.value === 'amount') {
          props.dispatch(sortByAmount())
        }
      }}
    >
      <option value="date">date</option>
      <option value="amount">montant</option>
    </select>
  </div >
)

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)