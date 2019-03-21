import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout_title">Expenses Tracker</h1>
      <p>gardez le contrôle de vos depenses, en tout temps et en tout lieu</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin())
  }
}

export default connect(undefined, mapDispatchToProps)(LoginPage)
