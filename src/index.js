import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import './styles/base/style.css'
import initStore from './store/initStore'
import visibleExpensesFilter from './filters/expenses'

const store = initStore()

store.subscribe(() => {
  const state = store.getState()
  console.log(visibleExpensesFilter(state.expenses, state.filters))
})

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.querySelector('#root'))