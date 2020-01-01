import { createContext } from 'react'

export const UserProfileContext = createContext({
  userProfiles: [{}],
  handleProfileSubmit: event => { },
  handleRoleChange: event => { },
  handleProfileDelete: event => { },
  handleProfileUpdate: event => { },
  username: '',
  email: '',
  password: '',
  role: ''
})