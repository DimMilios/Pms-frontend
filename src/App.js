import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { Container } from 'semantic-ui-react'

import UserProfilesPage from './pages/UserProfilesPage'
import StaffList from './components/StaffList'
import UserProfilesList from './components/UserProfileList'
import LoginPage from './pages/LoginPage'

import GlobalState from './context/GlobalState'

const App = () => {
  return (
    <GlobalState>
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={StaffList} />
            <Route exact path="/user-profiles" component={UserProfilesPage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </Router>
      </Container>
    </GlobalState>
  )
}


export default App;
