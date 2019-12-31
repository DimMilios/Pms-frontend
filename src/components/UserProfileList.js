import React from 'react'
import { Table } from 'semantic-ui-react'
import UserProfile from './UserProfile'

const UserProfileList = ({ userProfiles }) =>
  <div>
    <h2>User profiles</h2>
    <Table striped celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>id</Table.HeaderCell>
          <Table.HeaderCell>Username</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {userProfiles.map(userProfile =>
          <Table.Row key={userProfile.id}>
            <UserProfile
              userProfile={userProfile}
            />
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  </div>

export default UserProfileList
