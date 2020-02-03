import {
  REGISTER_START,
  REGISTER_NEXT_STEP,
  REGISTER_PREV_STEP,
  REGISTER_SET_USEPROFILE,
  REGISTER_SET_REST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_CLEAR,
} from '../types'

import patientService from '../../services/patients'

export const registerPatient = patientData => dispatch => {
  dispatch({ type: REGISTER_START })
  console.log('STARTING PATIENT REGISTRATION', patientData)
  patientService.create({ ...patientData })
    .then(response => {
      console.log(response)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response
      })
      dispatch({
        type: REGISTER_CLEAR
      })
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