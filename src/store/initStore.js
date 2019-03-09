//create store
import { createStore, combineReducers } from 'redux'
import expensesReducer from '../reducers/expenses'


export default () => {
  const initStore = createStore(combineReducers({
    expenses: expensesReducer
  }))
  return initStore
}
