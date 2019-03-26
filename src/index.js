import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter, { history } from './routers/AppRouter'
import { Provider } from 'react-redux'
import './styles/styles.scss'
import initStore from './store/initStore'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import { firebase } from './firebase/firebase'
import LoadingPage from './components/LoadingPage'

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

ReactDOM.render(<LoadingPage />, document.querySelector('#root'))

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})

