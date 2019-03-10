//filter expenses

const visibleExpensesFilter = (expenses, filters) => {
  return expenses.filter(expense => {
    const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase())
    if (textMatch) {
      return expenses
    }
    return null
  }).sort((a, b) => {
    if (filters.sortBy === 'date') {
      return b.createdAt - a.createdAt
    } else if (filters.sortBy === 'amount') {
      return b.amount - a.amount
    } else {
      return 0
    }
  })
}

export default visibleExpensesFilter