import React from 'react'
import { Table } from 'semantic-ui-react'

const Staff = ({ staff }) => {
  return (
    <>
      <Table.Cell>
        {staff.firstName}
      </Table.Cell>
      <Table.Cell>
        {staff.lastName}
      </Table.Cell>
      <Table.Cell>
        {staff.city}
      </Table.Cell>
      <Table.Cell>
        {staff.streetAddress}
      </Table.Cell>
      <Table.Cell>
        {staff.zipCode}
      </Table.Cell>
    </>
  )
}

export default Staff
