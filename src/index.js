import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import './styles/base/style.css'
import initStore from './store/initStore'
import { addExpense } from './actions/expenses'

const store = initStore()

store.subscribe(() => console.log(store.getState()))

store.dispatch(addExpense({ description: 'facture d\'électricité', amount: 13000, createdAt: 150 }))
store.dispatch(addExpense({ description: 'facture d\'eau', amount: 6500, createdAt: 300 }))
store.dispatch(addExpense({ description: 'Location voiture', amount: 8500, createdAt: 75 }))

ReactDOM.render(<div><AppRouter /></div>, document.querySelector('#root'))