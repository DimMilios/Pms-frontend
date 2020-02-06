import React from 'react'
import { useField } from '../hooks'
import { Link } from 'react-router-dom'

import { Form, Button } from 'semantic-ui-react'
import MainNavigation from '../components/MainNavigation'

import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../store/actions/authActions'


const LoginPage = props => {
  const [username, usernameReset] = useField('text')
  const [password, passwordReset] = useField('password')

  const handleLogout = () => {
    // setUser(null)
    // window.localStorage.removeItem('loggedUser')
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    // try {
    const userData = {
      username: username.value,
      password: password.value
    }
    console.log(userData)
    props.loginUser(userData, props.history)
  }

  return (
    <>
      <MainNavigation />
      {props.user.authenticated ?
        <div>
          <h3>You are logged in.</h3>
          <Link to="/">Go back to Home page</Link>
          <Button onClick={props.logoutUser}>logout</Button>
        </div>
        :
        <>
          <Form onSubmit={handleLogin}>
            <Form.Field>
              <label>Username</label>
              <input name="username" {...username} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input name="password" {...password} />
            </Form.Field>
            <Button style={{ float: 'right' }} primary type="submit">Login</Button>
          </Form>

        </>
      }
    </>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { loginUser, logoutUser })(LoginPage)