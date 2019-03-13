import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import './styles/base/style.css'
import initStore from './store/initStore'
import { startSetExpenses } from './actions/expenses'
import { firebase } from './firebase/firebase'

const store = initStore()


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
ReactDOM.render(<p>Loading...</p>, document.querySelector('#root'))


store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.querySelector('#root'))
})

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('log in')
  } else {
    console.log('log out')
  }
})

