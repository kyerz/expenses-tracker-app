//reducer expenses

const initStateExpensesReducer = []

const expensesReducer = (state = initStateExpensesReducer, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.id)
    default:
      return state
  }
}

export default expensesReducer