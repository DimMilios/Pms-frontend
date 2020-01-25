import React, { useContext } from 'react'
import loginService from '../services/login'
import userProfilesService from '../services/userProfiles'
import MainNavigation from '../components/MainNavigation'

import { UserContext } from '../context/UserContext'
import { UserProfileContext } from '../context/UserProfileContext'
import { Button } from 'semantic-ui-react'

const LoginPage = () => {
  const [user, setUser] = useContext(UserContext)
  const { username, password } = useContext(UserProfileContext)

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('loggedUser')
    userProfilesService.removeAuthorizationHeader()
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

  }

  return (
    <>
      <MainNavigation />
      {user === null ?
        (<div>
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
        ) :
        <Button onClick={() => handleLogout()}>logout</Button>
      }
    </>
  )
}

export default LoginPage