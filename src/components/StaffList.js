import React, { useContext } from 'react'
import { Table, Tab } from 'semantic-ui-react'
import { StaffContext } from '../context/StaffContext'

import Staff from './Staff'
import UserProfile from './UserProfile'
import MainNavigation from './MainNavigation'

const StaffList = () => {
  const context = useContext(StaffContext)

  return (
    <div>
      <MainNavigation />
      <h2>User profiles</h2>
      <Table striped celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Street</Table.HeaderCell>
            <Table.HeaderCell>Zip Code</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {context.staffList.map(staff =>
            <Table.Row key={staff.id}>
              <Staff
                staff={staff} />
            </Table.Row>
          )}

        </Table.Body>
      </Table>
    </div>)
}

export default StaffList


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