import React, { useState } from 'react'

import { Form, Button } from 'semantic-ui-react'

import { useField } from '../hooks'

// firstName: '',
//   lastName: '',
//   fatherName: '',
//   occupation: '',
//   city: '',
//   streetAddress: '',
//   zipCode: '',
//   staffType: '',
//   phoneNumbers: []

const buttonStyle = {
  marginTop: 20,
  float: 'right',
  display: 'flex'
}

const staffOptions = [
  { key: 'l', text: 'Lab_staff', value: 'Lab Staff' },
  { key: 'd', text: 'Doctor', value: 'Doctor' },
  { key: 'r', text: 'Receptionist', value: 'Receptionist' },
  { key: 'p', text: 'Payment_staff', value: 'Payment Staff' },
]

const PersonalDetailsForm = props => {
  const [firstName, firstNameReset] = useField('text', props.rest.firstName)
  const [lastName, lastNameReset] = useField('text', props.rest.lastName)
  const [fatherName, fatherNameReset] = useField('text', props.rest.fatherName)
  const [city, cityReset] = useField('text', props.rest.city)
  const [streetAddress, streetAddressReset] = useField('text', props.rest.streetAddress)
  const [zipCode, zipCodeReset] = useField('number', props.rest.zipCode)
  const [staffType, setStaffType] = useState(staffOptions[0].value)
  const [phoneNumbers, setPhoneNumbers] = useState([{ phoneNumber: '' }])
  const [phoneNumber, setPhoneNumber] = useState('')

  const stepContinue = step => e => {
    e.preventDefault()

    const rest = {
      firstName: firstName.value,
      lastName: lastName.value,
      fatherName: fatherName.value,
      city: city.value,
      streetAddress: streetAddress.value,
      zipCode: zipCode.value,
      staffType,
      phoneNumbers,
    }
    console.log(rest, step)
    props.setRest(rest)
    props.nextStep(step)
  }

  const stepBack = step => e => {
    e.preventDefault()
    props.previousStep(step)
  }

  const handleStaffTypeChange = e => {
    setStaffType(e.target.value)
    console.log(e.target.value)
  }

  const handlePhoneNumbersChange = id => event => {
    console.log(id, event.target.value)
    setPhoneNumbers(phoneNumbers.map((number, newId) => {
      return id === newId
        ? { ...number, phoneNumber: event.target.value }
        : number
    }))
  }

  const handleAddNumber = () =>
    setPhoneNumbers(phoneNumbers.concat([{ phoneNumber: '' }]))

  const handleNumberRemove = id => {
    setPhoneNumbers(phoneNumbers.filter((p, newId) => id !== newId))
  }

  const addNumbersJsx = () => {
    return (
      <div>
        {phoneNumbers.map((number, id) => (
          <div key={id}>
            <input
              name="phoneNumber"
              type="text"
              value={number.phoneNumber}
              onChange={handlePhoneNumbersChange(id)}
              placeholder="Phone Number"
            />
            <Button negative onClick={() => handleNumberRemove(id)}>
              Remove
            </Button>
          </div>
        ))}
        <Button onClick={handleAddNumber}>+</Button>
      </div>)
  }

  return (
    <div>
      <h1>Personal Details</h1>

      <Form>
        <Form.Field>
          <label>First Name</label>
          <input name="firstName" {...firstName} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input name="lastName" {...lastName} />
        </Form.Field>
        <Form.Field>
          <label>Father's Name</label>
          <input name="fatherName" {...fatherName} />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input name="city" {...city} />
        </Form.Field>
        <Form.Field>
          <label>Street Address</label>
          <input name="streetAddress" {...streetAddress} />
        </Form.Field>
        <Form.Field>
          <label>Zip Code</label>
          <input name="zipCode" {...zipCode} />
        </Form.Field>
        <Form.Field>
          {addNumbersJsx()}
        </Form.Field>
        <Form.Field>
          <label>Staff Role</label>
          <select onChange={handleStaffTypeChange}>
            {staffOptions.map(option =>
              <option key={option.key} value={option.value}>{option.value}</option>
            )}
          </select>
        </Form.Field>
        <div style={buttonStyle}>
          <Button style={{ marginRight: 5 }} onClick={stepBack(props.step)}>
            Back</Button>

          <Button primary onClick={stepContinue(props.step)}>Continue</Button>
        </div>
      </Form>
    </div>
  )
}

export default PersonalDetailsForm
