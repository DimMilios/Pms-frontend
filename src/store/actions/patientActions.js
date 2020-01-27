import {
  FETCH_PATIENTS_START,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_FAIL
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


