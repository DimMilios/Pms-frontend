import React, { useState } from 'react'
import { useField } from '../hooks'

import { Button } from 'semantic-ui-react'
import MainNavigation from '../components/MainNavigation'

import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../store/actions/loginActions'


const LoginPage = props => {
  const [user, setUser] = useState(null)
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
    setUser(props.loginUser(userData, props.history))
  }

  return (
    <>
      <MainNavigation />
      <div>
        <form onSubmit={handleLogin}>
          <div>
            username
              <input {...username} />
          </div>
          <div>
            password
              <input {...password} />
          </div>
          <button type="submit">login</button>
        </form>
      </div>
      <Button onClick={props.logoutUser}>logout</Button>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { loginUser, logoutUser })(LoginPage)