import {
  FETCH_AVAILABLE_DOCTORS_START,
  FETCH_AVAILABLE_DOCTORS_SUCCESS,
  FETCH_AVAILABLE_DOCTORS_FAIL,
  FETCH_SSN,
  FETCH_SSN_FAIL,
  CREATE_APPOINTMENT_START,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAIL,
} from '../types'

const initialState = {
  doctorId: 0,
  ssn: 0,
  date: '',
  time: '',
  error: null,
  loading: false
}

const fetchStart = (state, action) => {
  return {
    ...state,
    ...action.payload,
    error: null,
    loading: true
  }
}

const fetchSuccess = (state, action) => {
  return {
    ...state,
    doctorId: action.payload.id,
    date: action.payload.date,
    time: action.payload.time,
  }
}

const createAppStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null
  }
}

const createAppSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    error: null
  }
}

const createAppFail = (state, action) => {
  return {
    ...state,
    error: action.payload,
    loading: false
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_AVAILABLE_DOCTORS_START: return fetchStart(state, action)
    case FETCH_AVAILABLE_DOCTORS_SUCCESS: return fetchSuccess(state, action)
    case FETCH_AVAILABLE_DOCTORS_FAIL: return initialState
    case FETCH_SSN: return {
      ...state,
      ssn: action.payload.ssn
    }
    case CREATE_APPOINTMENT_START: return createAppStart(state, action)
    case CREATE_APPOINTMENT_SUCCESS: return createAppSuccess(state, action)
    case CREATE_APPOINTMENT_FAIL: return createAppFail(state, action)
    case FETCH_SSN_FAIL:
    default:
      return state
  }
}