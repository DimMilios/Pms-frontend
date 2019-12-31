import React, { useState, useEffect } from 'react'
import { useField } from './hooks'

import { Container } from 'semantic-ui-react'
import userProfileService from './services/userProfiles'

import UserProfileList from './components/UserProfileList'
import UserProfileForm from './components/UserProfileForm'

const App = () => {
  const [userProfiles, setUserProfiles] = useState([])
  const username = useField('text')
  const email = useField('text')
  const password = useField('password')
  const [role, setRole] = useState('STAFF')

  const handleRoleChange = event => {
    setRole(event.target.value)
    console.log(event.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const profileToAdd = {
      username: username.value,
      email: email.value,
      password: password.value,
      role
    }

    console.log(profileToAdd)

    try {
      const response = await userProfileService
        .create(profileToAdd)

      setUserProfiles(userProfiles.concat(response))
    } catch (error) {
      console.error(error)
    }


    // .then(response => setUserProfiles(userProfiles.concat(response)))
    // .catch(err => console.error(err))
  }

  useEffect(() => {
    userProfileService
      .getAll()
      .then(initialUserProfiles => setUserProfiles(initialUserProfiles))
  }, [])

  return (
    <Container>
      <UserProfileList
        userProfiles={userProfiles}
      />
      <UserProfileForm
        username={username}
        email={email}
        password={password}
        onSubmit={handleSubmit}
        handleRoleChange={handleRoleChange}
      />
    </Container>
  )
}


export default App;
