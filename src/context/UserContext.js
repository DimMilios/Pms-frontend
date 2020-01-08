import { createContext } from 'react'

export const UserContext = createContext({
  user: {},
  funcUser: () => { },
  username: '',
  password: ''
})