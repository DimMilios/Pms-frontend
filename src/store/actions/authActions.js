import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
} from '../types'

import axios from 'axios'

import jwtDecode from 'jwt-decode'

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
      console.log('login error', err)
      dispatch({
        type: AUTH_FAIL,
        payload: err
      })
    })
}

export const logoutUser = () => dispatch => {
  window.localStorage.removeItem('loggedUser');
  window.localStorage.removeItem('userId');
  window.localStorage.removeItem('userRole');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: AUTH_LOGOUT });
}


const setAuthorizationHeader = token => {
  window.localStorage.setItem('loggedUser', JSON.stringify(token));
  decodeToken(token);
  axios.defaults.headers.common['Authorization'] = token;
};

export const authSuccess = (token) => {
  return {
    type: AUTH_SUCCESS,
    payload: token,
  }
}

const getRole = (decodedToken) => {
  return decodedToken.authorities
    .find(a => a.authority === 'ROLE_USER' ? 'ROLE_USER' : '')
}

const decodeToken = token => {
  const decodedToken = jwtDecode(token);
  window.localStorage.setItem('userId', decodedToken.sub);
  const role = getRole(decodedToken);
  if (role) {
    window.localStorage.setItem('userRole', role.authority);
  }

  return decodeToken;
}

// export const authCheckState = () => {
//   console.log('DECODE IF BLOCK')
//   const token = localStorage.getItem('loggedUser');
//   if (!token) {
//   }
//   else {
//     const decodedToken = jwtDecode(token);
//     if (decodedToken.exp * 1000 < Date.now()) {
//       window.location.href = '/login';
//     } else {
//       axios.defaults.headers.common['Authorization'] = token;
//     }
//   }
// };
export const authCheckState = () => dispatch => {
  const token = localStorage.getItem('loggedUser');
  if (!token) {
    dispatch(logoutUser());
  }
  else {
    const decodedToken = decodeToken(token);
    // console.log('jwt sub: ', decodedToken)
    if (decodedToken.exp * 1000 < Date.now()) {
      dispatch(logoutUser());
    } else {
      dispatch(authSuccess(token));
      axios.defaults.headers.common['Authorization'] = token;
    }
  }
};
