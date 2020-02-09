import {
  FETCH_AVAILABLE_DOCTORS_START,
  FETCH_AVAILABLE_DOCTORS_SUCCESS,
  FETCH_AVAILABLE_DOCTORS_FAIL,
  CREATE_APPOINTMENT_START,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAIL,
} from '../types'

import appointmentService from '../../services/appointments'

export const fetchAvailableDoctors = (date, time) => (dispatch) => {
  // console.log('STARTING DOCTOR FETCH', getState())
  // const ssn = getState().appointment.ssn
  dispatch({ type: FETCH_AVAILABLE_DOCTORS_START })
  appointmentService.getAvailableDoctors(date, time)
    .then(response => {
      // console.log(response)
      dispatch({
        type: FETCH_AVAILABLE_DOCTORS_SUCCESS,
        payload: { ...response, date, time }
      })
      // dispatch(createAppointment(response.id, ssn, date, time))
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: FETCH_AVAILABLE_DOCTORS_FAIL,
        payload: err
      })
    })
}

export const createAppointment = (doctorId, ssn, date, time) => dispatch => {
  dispatch({ type: CREATE_APPOINTMENT_START })
  appointmentService.create(doctorId, ssn, date, time)
    .then(res => {
      dispatch({
        type: CREATE_APPOINTMENT_SUCCESS,
        payload: res
      })
    })
    .catch(error => {
      console.log('create app error: ', error.response)
      dispatch({
        type: CREATE_APPOINTMENT_FAIL,
        payload: error.response ? error.response.data.message : null
      })
    })
}

export const getUsername = () => {
  const role = localStorage.getItem('userRole')
  return role === 'ROLE_USER'
    ? localStorage.getItem('userId')
    : ''
}
















// export const createAppointment = (doctorId, date, time) => dispatch => {
//   // dispatch({ type: CREATE_APPOINTMENT_START })
//   // dispatch(appointmentStart())
//   // const ssn = dispatch(getSsn())
//   // console.log('ssn: ', ssn)
//   dispatch(fetchAvailableDoctors(date, time))
//   // console.log('Doctor id: ', doctorId)
//   // const ssn = dispatch(getSsn()).then(res => console.log(res)).catch(err => console.log(err))
//   // appointmentService.create(doctorId, ssn, date, time)
//   //   .then(response => {
//   //     console.log('create app success: ', response)
//   //     dispatch({
//   //       type: CREATE_APPOINTMENT_SUCCESS,
//   //       payload: response
//   //     })
//   //       .catch(err => {
//   //         console.log(err)
//   //         dispatch({
//   //           type: CREATE_APPOINTMENT_FAIL,
//   //           payload: err
//   //         })
//   //       })
//   //   })