import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

import { logoutUser } from '../store/actions/authActions'

const MainNavigation = props => {

  let menuItems = (
    <Menu.Menu position={"right"}>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/signup">Sign Up</Link>
      </Menu.Item>
    </Menu.Menu>
  )

  if (props.authenticated) {
    menuItems = (
      <Menu.Menu position={"right"}>
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item onClick={props.logoutUser}>
          Log Out
        </Menu.Item>
        <Menu.Item>
          <Link to="/services">Services</Link>
        </Menu.Item>
      </Menu.Menu>
    )
  }
  return (
    <Menu inverted>
      <Menu.Item>PMS</Menu.Item>
      {menuItems}
    </Menu>
  )
}

const mapStateToProps = state => ({
  authenticated: state.user.token !== ''
})

export default connect(mapStateToProps, { logoutUser })(MainNavigation)
