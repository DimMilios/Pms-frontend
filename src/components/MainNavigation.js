import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const MainNavigation = () => {
  return (
    <Menu inverted>
      <Menu.Item>PMS</Menu.Item>
      <Menu.Menu position={"right"}>
        <Menu.Item>
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/user-profiles">User Profiles</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/login">Login</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/signup">Sign Up</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/appointments">Appointments</NavLink>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}


export default MainNavigation
