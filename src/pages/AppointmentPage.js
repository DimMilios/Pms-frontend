import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import { useField } from '../hooks'

import { Form, Button, Message } from 'semantic-ui-react'
import MainNavigation from '../components/MainNavigation'

import {
  fetchAvailableDoctors,
  getUsername,
  createAppointment,
} from '../store/actions/appointmentActions'

import { fetchPatient } from '../store/actions/patientActions'

const AppointmentPage = props => {
  const [date] = useField('date')
  const [time] = useField('time')
  useEffect(() => {
    // const value = appointmentService.getAvailableDoctors('2020-02-03', '15:30:00')
    // if (!props.appointment.patient) {
    props.fetchPatient(getUsername())
    // }
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    await props.fetchAvailableDoctors(date.value, time.value)
  }

  const confirmAppointment = async event => {
    event.preventDefault()
    await props.createAppointment(props.doctorId, props.patient.ssn, date.value, time.value)
  }

  const renderError = () => {
    if (props.error) {
      return <Message negative>
        <Message.Header>{props.error}</Message.Header>
      </Message>
    }
  }

  return (
    <>
      <MainNavigation />

      {renderError()}

      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <input name="date" {...date} />
        </Form.Field>
        <Form.Field>
          <input name="time" {...time} />
        </Form.Field>
        <Button primary>Submit</Button>
      </Form>

      {props.doctorId ?
        <Button
          style={{ float: 'right' }}
          primary
          onClick={confirmAppointment}
        >Confirm</Button> : null}

    </>
  )
}

const mapStateToProps = state => ({
  appointment: state.appointment,
  patient: state.patients.patient,
  doctorId: state.appointment.doctorId,
  error: state.appointment.error,
})

export default connect(mapStateToProps, {
  fetchAvailableDoctors,
  fetchPatient,
  createAppointment,
})(AppointmentPage)
