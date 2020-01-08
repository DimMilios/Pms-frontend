import React, { useState, useEffect } from 'react'
import { useField } from '../hooks'

import userProfileService from '../services/userProfiles'
import staffService from '../services/staff'


import { UserProfileContext } from './UserProfileContext'
import { StaffContext } from './StaffContext'
import { UserContext } from './UserContext'

const GlobalState = props => {
  const [userProfiles, setUserProfiles] = useState([])
  const [username, usernameReset] = useField('text')
  const [email, emailReset] = useField('text')
  const [password, passwordReset] = useField('password')
  const [role, setRole] = useState('STAFF')
  const [user, setUser] = useState(null)


  const [staffList, setStaffList] = useState([])

  const handleRoleChange = event => {
    setRole(event.target.value)
    console.log(event.target.value)
  }

  const resetAll = () => {
    usernameReset()
    emailReset()
    passwordReset()
  }

  const handleProfileSubmit = async event => {
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
      resetAll()
    } catch (error) {
      console.error(error)
    }
  }

  const handleProfileDelete = profileId => {
    const profile = userProfiles.find(p => p.id === profileId)

    userProfileService
      .remove(profileId)
      .then(() => setUserProfiles(userProfiles.filter(profile =>
        profile.id !== profileId)))
      .catch(error => console.log(error))
  }

  const handleProfileUpdate = profileId => {
    const profile = userProfiles.find(p => p.id === profileId)
    const changedProfile = {
      username: 'ChangedUsername',
      email: 'changed@email.com',
      password: '123',
      role: 'STAFF'
    }

    userProfileService
      .update(profileId, changedProfile)
      .then(returnedProfile => setUserProfiles(userProfiles.map(profile =>
        profile.id !== profileId ? profile : returnedProfile)))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    userProfileService
      .getAll()
      .then(initialUserProfiles => setUserProfiles(initialUserProfiles))
  }, [])

  useEffect(() => {
    staffService
      .getAll()
      .then(initialStaff => setStaffList(initialStaff))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      userProfileService.setToken(user.token)
    }
  }, [])

  return (
    <>
      <UserContext.Provider value={
        [user, setUser]
      }>
        <UserProfileContext.Provider
          value={{
            userProfiles,
            handleProfileSubmit,
            handleRoleChange,
            handleProfileDelete,
            handleProfileUpdate,
            username,
            email,
            password,
            role
          }}
        >
          <StaffContext.Provider
            value={{
              staffList
            }}>
            {props.children}
          </StaffContext.Provider>
        </UserProfileContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default GlobalState