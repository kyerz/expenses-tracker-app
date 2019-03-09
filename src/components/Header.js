import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div>
    <h1>Expenses Tracker</h1>
    <NavLink to="/">DashBoard</NavLink>
    <NavLink to="/create">Create Expense</NavLink>
  </div>
)

export default Header