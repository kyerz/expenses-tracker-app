import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import './styles/base/style.css'
import initStore from './store/initStore'
import { addExpense } from './actions/expenses'
import visibleExpensesFilter from './filters/expenses'

const store = initStore()

store.subscribe(() => {
  const state = store.getState()
  console.log(visibleExpensesFilter(state.expenses, state.filters))
})


//dummy dispatch
store.dispatch(addExpense({ description: 'facture d\'électricité', amount: 13000, createdAt: 150 }))
store.dispatch(addExpense({ description: 'Facture d\'eau', amount: 6500, createdAt: 300 }))
store.dispatch(addExpense({ description: 'Location voiture', amount: 8500, createdAt: 75 }))


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.querySelector('#root'))