import React, { useState } from 'react'
import userProfileService from '../services/userProfiles'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'a', text: 'Admin', value: 'admin' },
  { key: 's', text: 'Staff', value: 'staff' },
  { key: 'u', text: 'User', value: 'user' },
]

const UserProfileForm = ({
  username,
  email,
  password,
  role,
  onSubmit,
  handleRoleChange
}) => {



  const { reset: _, ...noResetUsername } = username
  const { reset: __, ...noResetEmail } = email
  const { reset: a, ...noResetPassword } = password

  {/* <Form.Input fluid label='Username' placeholder='Username' {...noResetUsername} />
      <Form.Input fluid label='Email' placeholder='Email' {...noResetEmail} />
      <Form.Input fluid label='Password' placeholder='Password' {...noResetPassword} />
      <Form.Select
        fluid
        label='Role'
        options={options}
        placeholder='Role'
        onChange={() => handleRoleChange(this)}
  /> */}

  return (
    <Form onSubmit={onSubmit}>

      <Form.Field>
        <label>username</label>
        <input name="username" {...noResetUsername} />
      </Form.Field>
      <Form.Field>
        <label>email</label>
        <input name="email"  {...noResetEmail} />
      </Form.Field>
      <Form.Field>
        <label>password</label>
        <input type="password" {...noResetPassword} />
      </Form.Field>
      <Form.Field>
        <label>role</label>
        <select onChange={handleRoleChange}>
          <option value="STAFF">STAFF</option>
          <option value="ADMIN">ADMIN</option>
          <option value="USER">USER</option>
        </select>
      </Form.Field>

      <Form.Button>Submit</Form.Button>
    </Form>
  )
}

export default UserProfileForm