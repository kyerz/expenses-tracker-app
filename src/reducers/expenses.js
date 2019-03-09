//reducer expenses

const initStateExpensesReducer = []

const expensesReducer = (state = initStateExpensesReducer, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    default:
      return state
  }
}

export default expensesReducer