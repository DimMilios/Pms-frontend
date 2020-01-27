import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
} from '../types'

const initialState = {
  authenticated: false,
  loading: false,
  error: null,
  token: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        error: null,
        loading: true
      }
    case AUTH_SUCCESS:
      return {
        ...action.payload,
        authenticated: true,
        error: null,
        loading: false
      }
    case AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case AUTH_LOGOUT:
      return { ...initialState }
    default:
      return state
  }
}