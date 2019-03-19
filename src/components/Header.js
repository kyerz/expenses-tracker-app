import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

const Header = ({ startLogout }) => (
  <div>
    <h1>Expenses Tracker</h1>
    <NavLink activeClassName="selected" to="/dashboard">Tableau de bord</NavLink>
    <NavLink activeClassName="selected" to="/create">Créer une Dépense</NavLink>
    <button onClick={startLogout}>Logout</button>
  </div>
)

const mapDispatchToProps = (dispatch) => {
  return {
    startLogout: () => dispatch(startLogout())
  }
}

export default connect(undefined, mapDispatchToProps)(Header)