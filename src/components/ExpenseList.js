import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import visibleExpensesFilter from '../filters/expenses'

const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>Aucune dépense</p>
    ) :
      (
        props.expenses.map(expense => {
          return (
            <ExpenseListItem
              key={expense.id}
              {...expense}
            />
          )
        })
      )
    }
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: visibleExpensesFilter(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)