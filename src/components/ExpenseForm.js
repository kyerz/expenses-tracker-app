import React, { Component } from 'react'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment'
import uuid from 'uuid'

class ExpenseForm extends Component {

  state = {
    description: this.props.expense ? this.props.expense.description : '',
    note: this.props.expense ? this.props.expense.note : '',
    amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
    error: '',
    date: moment(),
    dateFocused: false
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
      this.setState(() => ({ error: 'Veuillez fournir une description et son montant' }))
    } else if (!this.state.description.trim()) {
      this.setState(() => ({ error: 'Le champ description est invalide' }))
    }
    else {
      this.setState(() => ({ error: '' }))

      const expense = {
        description: this.state.description,
        note: this.state.note,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.date.valueOf()
      }
      this.props.onSubmit(expense)
    }

  }

  onDateChange = (date) => {
    this.setState(() => ({ date }))
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ dateFocused: focused }))
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="description"
          className="input-text"
          onChange={this.onDescriptionChange}
          value={this.state.description}
        />
        <input
          type="number"
          placeholder="montant"
          className="input-text"
          onChange={this.onAmountChange}
          value={this.state.amount}
          step="0.01"
        />
        <SingleDatePicker
          date={this.state.date}
          onDateChange={this.onDateChange}
          focused={this.state.dateFocused}
          onFocusChange={this.onFocusChange}
          id={uuid()}
          numberOfMonths={1}
          isOutsideRange={() => false}
          block={true}
        />
        <textarea
          placeholder="vous pouvez écrire une note ici"
          className="textarea"
          onChange={this.onNoteChange}
          value={this.state.note}
        >
        </textarea>
        <div>
          <button className="button">Ajouter Dépense</button>
        </div>
      </form>
    )
  }
}

export default ExpenseForm