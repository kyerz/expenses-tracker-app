//create store
import { createStore, combineReducers } from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

export default () => {
  const initStore = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  }))
  return initStore
}
