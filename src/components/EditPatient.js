import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks'

import { Redirect } from 'react-router-dom'
import { Form } from 'semantic-ui-react'

import userProfileService from '../services/userProfiles'

const options = [
  { key: 'u', text: 'User', value: 'USER' },
  { key: 's', text: 'Staff', value: 'STAFF' },
]

const EditPatient = ({ patient, patient: { userProfile } }) => {
  const [username] = useField('text', patient && userProfile.username)
  const [email] = useField('email', patient && userProfile.email)
  const [password] = useField('password')
  const [role, setRole] = useState('USER')

  const handleRoleChange = e => {
    setRole(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const userData = {
      username: username.value,
      password: password.value,
      email: email.value,
      role
    }

    console.log('Userdata: ', userData)
    await userProfileService.update(userProfile.id, userData)
  }

  const editUserDetailsTogglable = () => (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Input
          label="Username"
          name="username"
          {...username}
          placeholder="username"
        />
        <Form.Input
          label="Email"
          name="email"
          {...email}
          placeholder="email"
        />
        <Form.Input
          label="Password"
          type="password"
          name="password"
          onChange={password.onChange}
          placeholder="password"
        />
        <Form.Field label='Role' control='select' onChange={handleRoleChange}>
          {options.map(option =>
            <option key={option.key} value={option.value}>{option.value}</option>
          )}
        </Form.Field>
      </Form.Group>

      <div style={{ marginTop: 20, float: 'right' }}>
        <Form.Button primary>
          Update
          </Form.Button>
      </div>
    </Form>
  )

  if (patient === null) return (<Redirect to="/services" />)

  return (
    <div>
      {editUserDetailsTogglable()}
    </div>
  )
}

const mapStateToProps = state => ({
  patient: state.patients.patient
})

export default connect(mapStateToProps, {

})(EditPatient)
