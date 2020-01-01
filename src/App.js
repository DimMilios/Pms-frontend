import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { Container } from 'semantic-ui-react'

import UserProfileList from './components/UserProfileList'
import UserProfileForm from './components/UserProfileForm'
import StaffList from './components/StaffList'

import GlobalState from './context/GlobalState'

const App = () => {
  return (
    <GlobalState>
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={StaffList} />
            <Route exact path="/user-profiles" component={UserProfileList} />
          </Switch>
        </Router>
      </Container>
    </GlobalState>
  )
}


export default App;
