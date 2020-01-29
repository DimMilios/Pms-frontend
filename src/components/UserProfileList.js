import React, { useContext } from 'react'
import { Table } from 'semantic-ui-react'
import UserProfile from './UserProfile'


const UserProfileList = () => {

  return (
    <div>
      <h2>User profiles</h2>
      <Table striped celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>id</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {/* {userProfiles.map(userProfile =>
            <Table.Row key={userProfile.id}>
              <UserProfile
                userProfile={userProfile}
                handleDelete={handleProfileDelete}
                handleUpdate={handleProfileUpdate}
              />
            </Table.Row>
          )} */}

        </Table.Body>
      </Table>
    </div>)
}

export default UserProfileList


/* {context.userProfiles.map(userProfile =>
            <Table.Row key={userProfile.id}>
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
            </Table.Row>
          )} */