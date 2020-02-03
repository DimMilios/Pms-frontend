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
//   sex: '',
//   phoneNumbers: []

const sexOptions = [
  { key: 'm', text: 'Male', value: 'MALE' },
  { key: 'f', text: 'Female', value: 'FEMALE' },
  { key: 'o', text: 'Other', value: 'OTHER' },
]

const PersonalDetailsForm = props => {
  const [ssn, setSsn] = useField('number', props.rest.ssn)
  const [firstName, firstNameReset] = useField('text', props.rest.firstName)
  const [lastName, lastNameReset] = useField('text', props.rest.lastName)
  const [fatherName, fatherNameReset] = useField('text', props.rest.fatherName)
  const [occupation, occupationReset] = useField('text', props.rest.occupation)
  const [birthDate, birthDateReset] = useField('date', props.rest.birthDate)
  const [city, cityReset] = useField('text', props.rest.city)
  const [streetAddress, streetAddressReset] = useField('text', props.rest.streetAddress)
  const [zipCode, zipCodeReset] = useField('number', props.rest.zipCode)
  const [sex, setSex] = useState(props.rest.sex)
  const [phoneNumbers, setPhoneNumbers] = useState([])

  const stepContinue = step => e => {
    e.preventDefault()

    const rest = {
      ssn: ssn.value,
      firstName: firstName.value,
      lastName: lastName.value,
      fatherName: fatherName.value,
      occupation: occupation.value,
      birthDate: birthDate.value,
      city: city.value,
      streetAddress: streetAddress.value,
      zipCode: zipCode.value,
      sex: sex
      //   phoneNumbers: []
    }
    console.log(rest, step)
    props.setRest(rest)
    props.nextStep(step)
  }

  const stepBack = step => e => {
    e.preventDefault()
    props.previousStep(step)
  }

  const handleSexTypeChange = e => {
    setSex(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div>
      <h1>Personal Details</h1>

      <Form>
        <Form.Field>
          <label>Ssn</label>
          <input name="ssn" {...ssn} />
        </Form.Field>
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
          <label>Occupation</label>
          <input name="occupation" {...occupation} />
        </Form.Field>
        <Form.Field>
          <label>Birth Date</label>
          <input name="birthDate" {...birthDate} />
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
          <label>Sex</label>
          <select onChange={handleSexTypeChange}>
            {sexOptions.map(option =>
              <option key={option.key} value={option.value}>{option.value}</option>
            )}
          </select>
        </Form.Field>
        <div style={{ marginTop: 20, float: 'right', display: 'inline-block' }}>
          <Button style={{ marginRight: 5 }} onClick={stepBack(props.step)}>
            Back</Button>

          <Button primary onClick={stepContinue(props.step)}>Continue</Button>
        </div>
      </Form>
    </div>
  )
}

export default PersonalDetailsForm
