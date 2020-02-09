import {
  FETCH_PATIENTS_START,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_FAIL,
  GET_PATIENT_FAIL,
  GET_PATIENT_SUCCESS
} from '../types'

import patientService from '../../services/patients'

export const fetchPatients = () => dispatch => {
  dispatch({ type: FETCH_PATIENTS_START })
  patientService.getAll()
    .then(patients => {
      dispatch({
        type: FETCH_PATIENTS_SUCCESS,
        payload: patients
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_PATIENTS_FAIL })
    })
}

export const fetchPatient = username => dispatch => {
  patientService.getByUsername(username)
    .then(response => {
      console.log('fetchSsn: ', response)
      dispatch({
        type: GET_PATIENT_SUCCESS,
        payload: response
      })
    })
    .catch(error => {
      dispatch({
        type: GET_PATIENT_FAIL,
        payload: error
      })
    })

}

