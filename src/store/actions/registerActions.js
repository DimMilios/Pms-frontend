import {
  REGISTER_START,
  REGISTER_NEXT,
  REGISTER_PREV,
  REGISTER_CONFIRM,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../types'

import staffService from '../../services/staff'

// can log user in when sign up is successful
export const registerUser = (userData, history) => dispatch => {
  dispatch({ type: REGISTER_START })
  console.log('STARTING REGISTRATION', userData)
  staffService.create({ ...userData })
    .then(response => {
      console.log(response)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response
      })
      // history.push('/')
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: REGISTER_FAIL,
        payload: err
      })
    })
}

export const nextStep = (userProfile, step) => {
  // console.log('NEXT STEP')
  return {
    type: REGISTER_NEXT,
    payload: {
      step,
      userProfile
    }
  }
}

export const previousStep = (userProfile, step) => {
  console.log('PREV STEP', userProfile)
  return {
    type: REGISTER_PREV,
    payload: {
      step,
      userProfile
    }
  }
}