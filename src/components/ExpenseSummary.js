import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import visibleExpensesFilter from '../filters/expenses'
import totalExpenses from '../filters/total-expenses'

const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? 'dépense' : 'dépenses'
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
  return (
    <div>
      <h1>Affichage de {expensesCount} {expenseWord} totalisant {formattedExpensesTotal}</h1>
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