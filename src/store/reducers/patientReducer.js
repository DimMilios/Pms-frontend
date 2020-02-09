import {
  FETCH_PATIENTS_START,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_FAIL,
  GET_PATIENT_SUCCESS,
  GET_PATIENT_FAIL,
} from '../types'

const initialState = {
  patients: [],
  patient: {},
  loading: false
}

const getPatient = (state, action) => {
  return {
    ...state,
    patient: action.payload,
    loading: false,
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PATIENTS_START:
      return {
        ...state,
        loading: true
      }
    case FETCH_PATIENTS_SUCCESS:
      return {
        ...state,
        patients: action.payload,
        loading: false
      }
    case FETCH_PATIENTS_FAIL:
      return { ...initialState }
    case GET_PATIENT_SUCCESS: return getPatient(state, action)
    case GET_PATIENT_FAIL:
      return {
        ...initialState
      }
    default:
      return state
  }
}