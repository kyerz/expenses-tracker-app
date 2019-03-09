import React from 'react'

const EditExpensePage = (props) => (
  <div>
    <h2>Edit Expense Page component</h2>
    <p> Expense with id: {props.match.params.id}</p>
  </div>
)


export default EditExpensePage