import React from 'react'
// import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';
import {setLoginSuccess} from 'redux/actions/loginActions'

export const ProtectedRoute = ({component: Component, ...rest}) => {

  return (
    <Route {...rest} render={props => (
      setLoginSuccess() ?
          <Component {...props} />
      : <Redirect to="/Login" />
  )} />
  )
}

export default ProtectedRoute;

