import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div>
    <h1>Expenses Tracker</h1>
    <NavLink activeClassName="selected" exact={true} to="/">DashBoard</NavLink>
    <NavLink activeClassName="selected" to="/create">Create Expense</NavLink>
  </div>
)

export default Header