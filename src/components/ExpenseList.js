import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import ExpenseListFilters from './ExpenseListFilters'
import visibleExpensesFilter from '../filters/expenses'
import totalExpense from '../filters/total-expenses'

const ExpenseList = (props) => (
  <div>
    <ExpenseListFilters />
    {props.expenses.map(expense => {
      return (
        <ExpenseListItem
          key={expense.id}
          {...expense}
        />
      )
    })}
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: visibleExpensesFilter(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)