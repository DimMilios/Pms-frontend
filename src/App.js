import React, { useEffect } from 'react'
import {
  // BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom'
// import jwtDecode from 'jwt-decode'
// import axios from 'axios'

// import { Provider } from 'react-redux'
import { connect } from 'react-redux'

// import store from './store/store'

import { Container } from 'semantic-ui-react'

import HomePage from './pages/HomePage'
// import UserProfilesPage from './pages/UserProfilesPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
// import AppointmentPage from './pages/AppointmentPage'

import { authCheckState } from './store/actions/authActions'
import PatientServicePage from './pages/PatientServicePage'

const App = props => {

  useEffect(() => {
    props.onTryAutoSignup()
  }, [])

  let routes = (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
    </Switch>
  )

  if (props.authenticated) {
    routes = (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route path="/services" component={PatientServicePage} />
      </Switch>
    )
  }
  return (
    <Container>
      {routes}
    </Container>
  )
}

const mapStateToProps = state => ({
  authenticated: state.user.token !== ''
})

const mapDispatchToProps = dispatch => ({
  onTryAutoSignup: () => dispatch(authCheckState())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
