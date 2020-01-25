import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const MainNavigation = () => {
  return (
    <Menu inverted>
      <Menu.Item>
        <NavLink to="/">Home</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/user-profiles">User Profiles</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/login">Login</NavLink>
      </Menu.Item>
    </Menu>
  )
}


export default MainNavigation
