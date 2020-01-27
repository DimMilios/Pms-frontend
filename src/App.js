import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { Provider } from 'react-redux'

import store from './store/store'

import { Container } from 'semantic-ui-react'

import UserProfilesPage from './pages/UserProfilesPage'
import StaffList from './components/StaffList'
import LoginPage from './pages/LoginPage'

// import GlobalState from './context/GlobalState'

const App = () => {
  return (
    <Provider store={store}>
      {/* <GlobalState> */}
      <Container>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={StaffList} /> */}
            <Route exact path="/user-profiles" component={UserProfilesPage} />
            {/* <Route exact path="/login" component={LoginPage} /> */}
          </Switch>
        </Router>
      </Container>
      {/* </GlobalState> */}
    </Provider>
  )
}


export default App;
