import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import { useField } from '../hooks'

const options = [
  { key: 'a', text: 'Admin', value: 'ADMIN' },
  { key: 's', text: 'Staff', value: 'STAFF' },
  { key: 'u', text: 'User', value: 'USER' },
]

const UserDetailsForm = (userProfile) => {
  const [username, usernameReset] = useField('text')
  const [email, emailReset] = useField('email')
  const [password, passwordReset] = useField('password')
  const [role, roleReset] = useField('text')

  const handleProfileSubmit = event => {
    event.preventDefault()

    const userData = {
      username: username.value,
      email: email.value,
      password: password.value,
      role: role.value
    }
    console.log(userData)
  }

  const handleRoleChange = event => {

  }

  return (
    <Form onSubmit={handleProfileSubmit}>
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
      {/* {console.log(userProfile)} */}
      <Form.Button>
        Submit
      </Form.Button>
    </Form>
  )
}

export default UserDetailsForm