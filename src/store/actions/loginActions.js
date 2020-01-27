import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
} from '../types'

import axios from 'axios'

import loginService from '../../services/login'

export const loginUser = (userData, history) => dispatch => {
  dispatch({ type: AUTH_START })
  console.log('LOGGING IN', userData)
  loginService.login({ ...userData })
    .then(response => {
      console.log(response)
      setAuthorizationHeader(response.token)
      dispatch({
        type: AUTH_SUCCESS,
        payload: response
      })
      history.push('/')
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: AUTH_FAIL,
        payload: err.response.data
      })
    })
}

export const logoutUser = () => dispatch => {
  window.localStorage.removeItem('loggedUser');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: AUTH_LOGOUT });
}


const setAuthorizationHeader = token => {
  window.localStorage.setItem('loggedUser', JSON.stringify(token));
  axios.defaults.headers.common['Authorization'] = token;
};