import React, { useEffect } from 'react'
import {
  // BrowserRouter as Router,
  Route,
  Switch,
  withRouter
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
import AppointmentPage from './pages/AppointmentPage'

import { authCheckState } from './store/actions/authActions'

// const token = localStorage.getItem('loggedUser')
// if (token) {
//   const decodedToken = jwtDecode(token);
//   if (decodedToken.exp * 1000 < Date.now()) {
//     store.dispatch(logoutUser());
//     window.location.href = '/login';
//   } else {
//     // store.dispatch({ type:  });
//     axios.defaults.headers.common['Authorization'] = token;
//     // store.dispatch(getUserData());
//   }
// }

const App = props => {

  useEffect(() => {
    props.onTryAutoSignup()
  }, [])

  return (
    <Container>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/" component={UserProfilesPage} /> */}
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/appointments" component={AppointmentPage} />
      </Switch>
    </Container>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.token !== null
})

const mapDispatchToProps = dispatch => ({
  onTryAutoSignup: () => dispatch(authCheckState())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
