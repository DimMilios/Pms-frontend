import React, { useContext } from 'react'
import { UserProfileContext } from '../context/UserProfileContext'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'a', text: 'Admin', value: 'ADMIN' },
  { key: 's', text: 'Staff', value: 'STAFF' },
  { key: 'u', text: 'User', value: 'USER' },
]

const UserProfileForm = () => {
  const {
    handleSubmit,
    handleRoleChange,
    username,
    email,
    password
  } = useContext(UserProfileContext)


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
    <Form onSubmit={handleSubmit}>

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
          {options.map(option =>
            <option key={option.key} value={option.value}>{option.value}</option>
          )}
          {/* <option value="STAFF">STAFF</option>
          <option value="ADMIN">ADMIN</option>
          <option value="USER">USER</option> */}
        </select>
      </Form.Field>

      <Form.Button>Submit</Form.Button>
    </Form>
  )
}

export default UserProfileForm