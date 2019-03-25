import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

const EditExpensePage = (props) => (
  <div>
    <div className="page-header">
      <h1 className="page-header__title">Editer une Dépense</h1>
    </div>
    <div className="content-container">
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(props.expense.id, expense))
          props.history.push('/dashboard')
        }}
      />
      <button
        className="button button--remove"
        onClick={() => {
          props.dispatch(startRemoveExpense({ id: props.expense.id }))
          props.history.push('/dashboard')
        }}
      >Supprimer Dépense
    </button>
    </div>
  </div>
)
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage)