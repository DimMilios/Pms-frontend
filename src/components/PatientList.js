import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { fetchPatients } from '../store/actions/patientActions'

const PatientList = props => {
  const fetchPatients = props.fetchPatients
  useEffect(() => {
    fetchPatients()
  }, [fetchPatients])

  return (
    <div>
      <h2>User profiles</h2>
      <Table striped celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ssn</Table.HeaderCell>
            <Table.HeaderCell>occupation</Table.HeaderCell>
            <Table.HeaderCell>first name</Table.HeaderCell>
            <Table.HeaderCell>last name</Table.HeaderCell>
            <Table.HeaderCell>father name</Table.HeaderCell>
            <Table.HeaderCell>sex</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.patients.map(patient =>
            <Table.Row key={patient.ssn}>
              <Table.Cell>
                {patient.ssn}
              </Table.Cell>
              <Table.Cell>
                {patient.firstName}
              </Table.Cell>
              <Table.Cell>
                {patient.occupation}
              </Table.Cell>
            </Table.Row>
          )}

        </Table.Body>
      </Table>
      <Button onClick={props.fetchPatients}>Click</Button>
    </div >
  )
}

PatientList.propTypes = {
  patients: PropTypes.array.isRequired,
  fetchPatients: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  patients: state.patients.patients
})


export default connect(mapStateToProps, { fetchPatients })(PatientList)