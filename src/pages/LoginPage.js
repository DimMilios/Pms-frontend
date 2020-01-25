import React, { useContext } from 'react'
import loginService from '../services/login'
import { Link } from 'react-router-dom'

import { UserContext } from '../context/UserContext'
import { UserProfileContext } from '../context/UserProfileContext'
import { Button } from 'semantic-ui-react'

const LoginPage = () => {
  const [user, setUser] = useContext(UserContext)
  const { username, password } = useContext(UserProfileContext)

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('loggedUser')
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    // try {
    const userData = await loginService.login({
      username: username.value,
      password: password.value
    })
    // console.log(userData)
    window.localStorage.setItem('loggedUser', JSON.stringify(userData.token))
    // userProfilesService.setToken(userData.token)
    console.log('Call from login page: ', userData.token)
    setUser(userData)
    // console.log(user)
    // } catch (exception) {
    //   console.error(exception)
    // }

  }

  if (user === null) {
    return (
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
    )
  }

  return (
    <>
      <Button onClick={() => handleLogout()}>logout</Button>
      <Button>
        <Link to="/">Home</Link>
      </Button>
    </>
  )
}

export default LoginPage