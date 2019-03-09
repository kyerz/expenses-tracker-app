import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import './styles/base/style.css'
import initStore from './store/initStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setSearchText, sortByAmount, sortByDate } from './actions/filters'
import visibleExpensesFilter from './filters/expenses'

const store = initStore()

store.subscribe(() => {
  const state = store.getState()
  console.log(visibleExpensesFilter(state.expenses, state.filters))
})

//dummy dispatch
store.dispatch(addExpense({ description: 'facture d\'électricité', amount: 13000, createdAt: 150 }))
const item2 = store.dispatch(addExpense({ description: 'facture d\'eau', amount: 6500, createdAt: 300 }))
const item = store.dispatch(addExpense({ description: 'Location voiture', amount: 8500, createdAt: 75 }))

// store.dispatch(removeExpense(item.expense.id))
// store.dispatch(editExpense(item2.expense.id, { description: 'magasin de vêtements', amount: 2450 }))
store.dispatch(setSearchText('rent'))
store.dispatch(sortByAmount())
store.dispatch(sortByDate())


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.querySelector('#root'))