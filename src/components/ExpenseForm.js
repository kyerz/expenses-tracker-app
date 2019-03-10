import React, { Component } from 'react'

class ExpenseForm extends Component {

  state = {
    description: this.props.expense ? this.props.expense.description : '',
    note: this.props.expense ? this.props.expense.note : '',
    amount: this.props.expense ? this.props.expense.amount : '',
    error: ''
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onSubmit = (e) => {
    e.preventDefault()

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide a description and amount' }))
    } else {
      this.setState(() => ({ error: '' }))

      const expense = {
        description: this.state.description,
        note: this.state.note,
        amount: this.state.amount,
        createdAt: Date.now()
      }
      this.props.onSubmit(expense)
    }

  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="description"
            onChange={this.onDescriptionChange}
            value={this.state.description}
          />
          <input
            type="number"
            placeholder="amount"
            onChange={this.onAmountChange}
            value={this.state.amount}
          />
          <textarea
            placeholder="you can write a note here"
            cols="30"
            rows="2"
            onChange={this.onNoteChange}
            value={this.state.note}
          >
          </textarea>
          <button
            type="submit"
          >Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm