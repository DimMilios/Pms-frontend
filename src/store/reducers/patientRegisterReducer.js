import {
  REGISTER_NEXT_STEP,
  REGISTER_PREV_STEP,
  REGISTER_SET_USEPROFILE,
  REGISTER_SET_REST,
  REGISTER_SUCCESS,
  REGISTER_CLEAR,
} from '../types'

const initialState = {
  step: 1,
  ssn: 0,
  userProfile: {
    username: '',
    password: '',
    email: '',
    role: 'USER',
  },
  occupation: '',
  birthDate: '',
  sex: '',
  firstName: '',
  lastName: '',
  fatherName: '',
  // city: '',
  // streetAddress: '',
  // zipCode: '',
  // phoneNumbers: []
}

const nextStep = (state, action) => {
  console.log('reducer', action)
  return {
    ...state,
    step: +[action.step] + 1,
  }
}

const prevStep = (state, action) => {
  return {
    ...state,
    step: +[action.step] - 1,
  }
}

const setUserProfile = (state, action) => ({
  ...state,
  userProfile: action.userProfile
})

const setRest = (state, action) => {
  console.log('Register set rest:', action)
  return {
    ...state,
    ...action.rest
  }
}

const registerSuccess = (state, action) => {
  console.log('Register success')
  return {
    ...state,
    ...action.payload
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_NEXT_STEP:
      return nextStep(state, action)
    case REGISTER_PREV_STEP:
      return prevStep(state, action)
    case REGISTER_SET_USEPROFILE:
      return setUserProfile(state, action)
    case REGISTER_SET_REST:
      return setRest(state, action)
    case REGISTER_SUCCESS:
      return registerSuccess(state, action)
    case REGISTER_CLEAR:
      return initialState
    default:
      return state
  }
}

export default reducer