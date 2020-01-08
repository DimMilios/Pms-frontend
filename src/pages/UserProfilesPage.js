import React from 'react'
import MainNavigation from '../components/MainNavigation'
import UserProfilesForm from '../components/UserProfileForm'
import UserProfilesList from '../components/UserProfileList'

import UserProfileContext from '../context/UserProfileContext'

const UserProfilesPage = () => {
  return (
    <>
      <MainNavigation />
      <UserProfilesList />
      <UserProfilesForm />
    </>
  )
}

export default UserProfilesPage
