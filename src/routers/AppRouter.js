import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import ExpenseDashBoardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import LoginPage from '../components/LoginPage'
import NotFoundPage from '../components/NotFoundPage'


export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path='/' component={LoginPage} />
        <PrivateRoute exact path='/dashboard' component={ExpenseDashBoardPage} />
        <PrivateRoute path='/create' component={AddExpensePage} />
        <PrivateRoute path='/edit/:id' component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter