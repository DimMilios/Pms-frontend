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
          {/* <Table.Row>
            <Table.Cell>Username:</Table.Cell>
            <Table.Cell>{props.userProfile.username}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Email:</Table.Cell>
            <Table.Cell>{props.userProfile.email}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Role:</Table.Cell>
            <Table.Cell>{props.userProfile.role}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>First Name:</Table.Cell>
            <Table.Cell>{props.firstName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Last Name:</Table.Cell>
            <Table.Cell>{props.lastName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Father's Name:</Table.Cell>
            <Table.Cell>{props.fatherName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>City:</Table.Cell>
            <Table.Cell>{props.city}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Street:</Table.Cell>
            <Table.Cell>{props.streetAddress}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Zip Code:</Table.Cell>
            <Table.Cell>{props.zipCode}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Phone Numbers:</Table.Cell>
            <Table.Cell>{props.phoneNumbers}</Table.Cell>
          </Table.Row> */}
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
  step: state.staffRegister.step,
  userProfile: state.staffRegister.userProfile,
  firstName: state.staffRegister.firstName,
  lastName: state.staffRegister.lastName,
  fatherName: state.staffRegister.fatherName,
  city: state.staffRegister.city,
  streetAddress: state.staffRegister.streetAddress,
  zipCode: state.staffRegister.zipCode,
  staffType: state.staffRegister.staffType,
  phoneNumbers: state.staffRegister.phoneNumbers
})

export default connect(mapStateToProps, {
  registerUser,
  previousStep,
})(RegisterConfirm)
