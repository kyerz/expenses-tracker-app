const totalExpenses = (filteredExpenses) => {
  let total = 0
  filteredExpenses.map(expense => total += expense.amount)
  return total
}

export default totalExpenses
