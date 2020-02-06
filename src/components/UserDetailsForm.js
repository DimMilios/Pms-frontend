import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

import { useField } from '../hooks'

const options = [
  { key: 'u', text: 'User', value: 'USER' },
  { key: 'a', text: 'Admin', value: 'ADMIN' },
  { key: 's', text: 'Staff', value: 'STAFF' },
]

const UserDetailsForm = props => {
  const [username, usernameReset] = useField('text', props.userProfile.username)
  const [email, emailReset] = useField('email', props.userProfile.email)
  const [password, passwordReset] = useField('password', props.userProfile.password)
  const [role, setRole] = useState('USER')

  const handleRoleChange = e => {
    setRole(e.target.value)
    console.log(e.target.value)
  }

  const stepContinue = step => e => {
    e.preventDefault()

    const userData = {
      username: username.value,
      email: email.value,
      password: password.value,
      role: role
    }
    console.log(userData)
    props.setUserProfile(userData)
    props.nextStep(step)
  }

  return (
    <Form>
      <Form.Field>
        <label>username</label>
        <input name="username" {...username} />
      </Form.Field>
      <Form.Field>
        <label>email</label>
        <input name="email"  {...email} />
      </Form.Field>
      <Form.Field>
        <label>password</label>
        <input type="password" {...password} />
      </Form.Field>
      <Form.Field>
        <label>role</label>
        <select onChange={handleRoleChange}>
          {options.map(option =>
            <option key={option.key} value={option.value}>{option.value}</option>
          )}
        </select>
      </Form.Field>
      <div style={{ marginTop: 20, float: 'right' }}>
        <Form.Button primary onClick={stepContinue(props.step)}>
          Continue
          </Form.Button>
      </div>
    </Form>
  )
}

export default UserDetailsForm