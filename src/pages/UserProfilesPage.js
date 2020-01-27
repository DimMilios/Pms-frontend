import React, { useEffect } from 'react'
import MainNavigation from '../components/MainNavigation'
import UserProfilesForm from '../components/UserProfileForm'
import UserProfilesList from '../components/UserProfileList'
import PatientList from '../components/PatientList'

const UserProfilesPage = props => {

  return (
    <>
      <MainNavigation />
      <PatientList />
      {/* <UserProfilesList />
      <UserProfilesForm /> */}
    </>
  )
}

export default UserProfilesPage