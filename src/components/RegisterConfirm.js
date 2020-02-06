import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { previousStep, registerUser } from '../store/actions/staffRegisterActions'

import { Button, Table } from 'semantic-ui-react'

const RegisterConfirm = props => {
  let history = useHistory()

  const stepBack = step => e => {
    e.preventDefault()
    props.previousStep(step)
  }

  const handleRegistration = async e => {
    e.preventDefault()

    const userData = {
      userProfile: props.userProfile,
      firstName: props.firstName,
      lastName: props.lastName,
      fatherName: props.fatherName,
      city: props.city,
      streetAddress: props.streetAddress,
      zipCode: props.zipCode,
      staffType: props.staffType,
      phoneNumbers: props.phoneNumbers
    }
    await props.registerUser(userData)
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
  step: state.register.step,
  userProfile: state.register.userProfile,
  firstName: state.register.firstName,
  lastName: state.register.lastName,
  fatherName: state.register.fatherName,
  city: state.register.city,
  streetAddress: state.register.streetAddress,
  zipCode: state.register.zipCode,
  staffType: state.register.staffType,
  phoneNumbers: state.register.phoneNumbers
})

export default connect(mapStateToProps, {
  registerUser,
  previousStep,
})(RegisterConfirm)
