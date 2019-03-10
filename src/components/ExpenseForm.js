import React from 'react'

const ExpenseForm = () => (
  <div>
    <form>
      <input
        type="text"
        placeholder="description"
      />
      <input
        type="number"
        placeholder="amount"
      />
      <textarea
        placeholder="you can write a note here"
        cols="30"
        rows="2"
      >
      </textarea>
      <button>Add Expense</button>
    </form>
  </div>
)

export default ExpenseForm