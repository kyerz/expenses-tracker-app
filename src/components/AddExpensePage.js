import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
  <div>
    <h2>Ajouter une nouvelle Dépense</h2>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(startAddExpense(expense))
        props.history.push('/')
      }}
    />
  </div>
)

export default connect()(AddExpensePage)