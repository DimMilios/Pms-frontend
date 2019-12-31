import React from 'react'
import { Table } from 'semantic-ui-react'

const UserProfile = ({ userProfile }) =>
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
  </>
export default UserProfile
