import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import './styles/base/style.css'
import initStore from './store/initStore'

const store = initStore()

console.log(store.getState())

ReactDOM.render(<div><AppRouter /></div>, document.querySelector('#root'))