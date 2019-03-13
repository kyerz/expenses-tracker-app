import React from 'react'
import Header from '../components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExpenseDashBoardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import LoginPage from '../components/LoginPage'
import NotFoundPage from '../components/NotFoundPage'


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/dashboard' component={ExpenseDashBoardPage} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/edit/:id' component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter