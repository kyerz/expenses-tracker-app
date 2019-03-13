import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter, { history } from './routers/AppRouter'
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

let hasRendered = false

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.querySelector('#root'))
    hasRendered = true
  }
}

ReactDOM.render(<p>Loading...</p>, document.querySelector('#root'))

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    renderApp()
    history.push('/')
  }
})

