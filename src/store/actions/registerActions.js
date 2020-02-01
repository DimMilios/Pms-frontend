import {
  REGISTER_START,
  REGISTER_NEXT_STEP,
  REGISTER_PREV_STEP,
  REGISTER_SET_USEPROFILE,
  REGISTER_SET_REST,
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

export const nextStep = (step) => {
  // console.log('NEXT STEP')
  return {
    type: REGISTER_NEXT_STEP,
    step: step
  }
}

export const previousStep = (step) => {
  console.log('PREV STEP')
  return {
    type: REGISTER_PREV_STEP,
    step: step
  }
}


export const setUserProfile = userProfile => {
  console.log('SET USER PROFILE')
  return {
    type: REGISTER_SET_USEPROFILE,
    userProfile: userProfile
  }
}

export const setRest = rest => {
  console.log('SET REST ACTION')
  return {
    type: REGISTER_SET_REST,
    rest: rest
  }
}
