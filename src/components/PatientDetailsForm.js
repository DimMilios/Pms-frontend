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
  const [ssn] = useField('number', props.rest.ssn)
  const [firstName] = useField('text', props.rest.firstName)
  const [lastName] = useField('text', props.rest.lastName)
  const [fatherName] = useField('text', props.rest.fatherName)
  const [occupation] = useField('text', props.rest.occupation)
  const [birthDate] = useField('date', props.rest.birthDate)
  const [city] = useField('text', props.rest.city)
  const [streetAddress] = useField('text', props.rest.streetAddress)
  const [zipCode] = useField('number', props.rest.zipCode)
  const [sex, setSex] = useState('MALE')
  // const [phoneNumbers, setPhoneNumbers] = useState([])

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
          <input name="ssn" required {...ssn} />
        </Form.Field>
        <Form.Field>
          <label>First Name</label>
          <input name="firstName" required {...firstName} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input name="lastName" required {...lastName} />
        </Form.Field>
        <Form.Field>
          <label>Father's Name</label>
          <input name="fatherName" required {...fatherName} />
        </Form.Field>
        <Form.Field>
          <label>Occupation</label>
          <input name="occupation" required {...occupation} />
        </Form.Field>
        <Form.Field>
          <label>Birth Date</label>
          <input name="birthDate" required {...birthDate} />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input name="city" required {...city} />
        </Form.Field>
        <Form.Field>
          <label>Street Address</label>
          <input name="streetAddress" required {...streetAddress} />
        </Form.Field>
        <Form.Field>
          <label>Zip Code</label>
          <input name="zipCode" required {...zipCode} />
        </Form.Field>
        <Form.Field>
          <label>Sex</label>
          <select onChange={handleSexTypeChange}>
            {sexOptions.map(option =>
              <option key={option.key} required value={option.value}>{option.value}</option>
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
