import React, { useEffect } from 'react'
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom'

import { connect } from 'react-redux'
import { fetchPatient } from '../store/actions/patientActions'
import { getUsername } from '../store/actions/appointmentActions'

import AppointmentPage from './AppointmentPage'
import EditPatient from '../components/EditPatient'

const PatientServicePage = props => {
  let match = useRouteMatch()

  useEffect(() => {
    if (!props.patient) {
      props.fetchPatient(getUsername())
    }
  }, [])

  const ssnLink = () => {
    if (props.patient) {
      return (
        <li>
          <Link to={`${match.url}/edit-details/${props.patient.ssn}`}>
            Edit Details
      </Link>
        </li>
      )
    }
  }

  return (
    <>
      <h1>Patient services</h1>

      <ul>
        <li>
          <Link to={`${match.url}/appointments`}>
            Appointments
          </Link>
        </li>
        {ssnLink()}

      </ul>

      <Switch>
        <Route exact path={`${match.path}/appointments`}>
          <AppointmentPage />
          <h2>AppointmentPage</h2>
        </Route>
        <Route path={`${match.path}/:ssn`}>
          <h2>Edit Details</h2>
          <EditPatient />
        </Route>
      </Switch>

    </>
  )
}

const mapStateToProps = state => ({
  patient: state.patients.patient
})

export default connect(mapStateToProps, {
  fetchPatient,
})(PatientServicePage)
