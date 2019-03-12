import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div>
    <h1>Expenses Tracker</h1>
    <NavLink activeClassName="selected" exact={true} to="/">Tableau de bord</NavLink>
    <NavLink activeClassName="selected" to="/create">Créer une Dépense</NavLink>
  </div>
)

export default Header