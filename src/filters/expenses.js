//filter expenses

const visibleExpensesFilter = (expenses, filters) => {
  return expenses.filter(expense => {
    const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase())
    console.log(textMatch)
    if (textMatch) {
      return expenses
    }
    return null
  })
}

export default visibleExpensesFilter