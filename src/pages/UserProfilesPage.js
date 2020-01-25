import React from 'react'
import MainNavigation from '../components/MainNavigation'
import UserProfilesForm from '../components/UserProfileForm'
import UserProfilesList from '../components/UserProfileList'

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
