import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { previousStep, registerPatient } from '../store/actions/patientRegisterActions'

import { Button, Table } from 'semantic-ui-react'

const PatientConfirm = props => {
  let history = useHistory()

  const stepBack = step => e => {
    e.preventDefault()
    props.previousStep(step)
  }

  const handleRegistration = async e => {
    e.preventDefault()

    const patientData = {
      ssn: props.ssn,
      userProfile: props.userProfile,
      firstName: props.firstName,
      lastName: props.lastName,
      fatherName: props.fatherName,
      occupation: props.occupation,
      birthDate: props.birthDate,
      sex: props.sex,
      city: props.city,
      streetAddress: props.streetAddress,
      zipCode: props.zipCode,
      phoneNumbers: props.phoneNumbers
    }
    await props.registerPatient(patientData)
    history.push('/')
  }

  return (
    <div>
      <h1>Confirm registration</h1>
      <Table striped celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Value</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {/* Object.keys(ob1).map(key => console.log(key, ob1[key])) */}

        {/* keys1.forEach(([key, value]) => console.log(key, value)) */}


        <Table.Body>
          {Object.entries(props).map(([key, value]) => {
            if (typeof value !== 'object'
              && typeof value !== 'function'
              && value !== props.step) {
              return (
                <Table.Row key={key}>
                  <Table.Cell>{key}</Table.Cell>
                  <Table.Cell>{value}</Table.Cell>
                </Table.Row>
              )
            }
            return null
          })}
          {Object.entries(props.userProfile).map(([key, value]) =>
            <Table.Row key={key}>
              <Table.Cell>{key}</Table.Cell>
              <Table.Cell>{value}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>

      <div style={{ marginTop: 20 }}>
        <Button style={{ marginRight: 5 }} onClick={stepBack(props.step)}>
          Back</Button>

        <Button primary onClick={handleRegistration}>Confirm</Button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  step: state.patientRegister.step,
  ssn: state.patientRegister.ssn,
  userProfile: state.patientRegister.userProfile,
  firstName: state.patientRegister.firstName,
  lastName: state.patientRegister.lastName,
  fatherName: state.patientRegister.fatherName,
  occupation: state.patientRegister.occupation,
  birthDate: state.patientRegister.birthDate,
  sex: state.patientRegister.sex,
  city: state.patientRegister.city,
  streetAddress: state.patientRegister.streetAddress,
  zipCode: state.patientRegister.zipCode,
  phoneNumbers: state.patientRegister.phoneNumbers
})

export default connect(mapStateToProps, {
  registerPatient,
  previousStep,
})(PatientConfirm)
