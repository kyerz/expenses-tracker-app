import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import visibleExpensesFilter from '../filters/expenses'

const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Dépenses</div>
      <div className="show-for-desktop">Dépense</div>
      <div className="show-for-desktop">Montant</div>
    </div>
    {props.expenses.length === 0 ? (

      <div className="list-item list-item--message">
        <span>Aucune dépense</span>
      </div>
    ) :
      (
        props.expenses.map(expense => {
          return (
            <div className="list-body">
              <ExpenseListItem
                key={expense.id}
                {...expense}
              />
            </div>
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