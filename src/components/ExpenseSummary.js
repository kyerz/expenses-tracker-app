import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import visibleExpensesFilter from '../filters/expenses'
import totalExpenses from '../filters/total-expenses'

const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? 'dépense' : 'dépenses'
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Affichage de <span>{expensesCount}</span> {expenseWord} totalisant <span>{formattedExpensesTotal}</span></h1>
        <div className="page-header_actions">
          <Link className="button" to="/create">Ajouter une Dépense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const filteredExpenses = visibleExpensesFilter(state.expenses, state.filters)
  return {
    expensesTotal: totalExpenses(filteredExpenses),
    expensesCount: filteredExpenses.length
  }
}

export default connect(mapStateToProps)(ExpenseSummary)
