import React from 'react'
import { Table, Button } from 'semantic-ui-react'

const UserProfile = ({ userProfile, handleDelete, handleUpdate }) =>
  <>
    <Table.Cell>
      {userProfile.id}
    </Table.Cell>
    <Table.Cell>
      {userProfile.username}
    </Table.Cell>
    <Table.Cell>
      {userProfile.email}
    </Table.Cell>
    <Table.Cell>
      {userProfile.role}
    </Table.Cell>
    <Table.Cell>
      <Button primary onClick={() => handleUpdate(userProfile.id)}>Update</Button>
      <Button negative onClick={() => handleDelete(userProfile.id)}>X</Button>
    </Table.Cell>
  </>
export default UserProfile
