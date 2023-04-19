import React, { Fragment } from 'react'
import AdminRoute from './AdminRoute'

const AdminArea = (props) => {
  return (
    <Fragment>
      <AdminRoute {...props} />
    </Fragment>
  )
}

export default AdminArea
