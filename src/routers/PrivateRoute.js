import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'


const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <div>
      <Route {...rest} component={(props) => (
        isAuthenticated ? (
          <div>
            <Header />
            <Component {...props} />
          </div>
        ) : (
            <Redirect to="/" />
          )
      )} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid
  }
}

export default connect(mapStateToProps)(PrivateRoute)