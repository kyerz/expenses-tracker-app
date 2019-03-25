import React from 'react'
import { connect } from 'react-redux'
import { setSearchText } from '../actions/filters'
import { sortByDate, sortByAmount } from '../actions/filters'

const ExpenseListFilters = (props) => (
  <div className="content-container">
    <div className="input-group">
      <div className="input-group__item">
        <input
          type="text"
          className="input-text"
          placeholder="Rechercher une dépense"
          value={props.filters.text}
          onChange={(e) => props.dispatch(setSearchText(e.target.value))}
        />
      </div>
      <div className="input-group__item">
        <select
          className="select"
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
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)