import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import axios from 'axios'

import { Provider } from 'react-redux'

import store from './store/store'

import { Container } from 'semantic-ui-react'

import UserProfilesPage from './pages/UserProfilesPage'
import StaffList from './components/StaffList'
import LoginPage from './pages/LoginPage'

import { logoutUser } from './store/actions/loginActions'

// import GlobalState from './context/GlobalState'

const token = localStorage.getItem('loggedUser')
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    // store.dispatch({ type:  });
    axios.defaults.headers.common['Authorization'] = token;
    // store.dispatch(getUserData());
  }
}

const App = () => {
  return (
    <Provider store={store}>
      {/* <GlobalState> */}
      <Container>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={StaffList} /> */}
            <Route exact path="/" component={UserProfilesPage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </Router>
      </Container>
      {/* </GlobalState> */}
    </Provider>
  )
}


export default App;
