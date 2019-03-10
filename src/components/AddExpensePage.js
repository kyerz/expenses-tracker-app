import React from 'react'
import ExpenseForm from './ExpenseForm'
const AddExpensePage = () => (
  <div>
    <h2>Add New Expense</h2>
    <ExpenseForm onSubmit={(expense) => {
      console.log('expense saved', expense)
    }} />
  </div>
)

export default AddExpensePage