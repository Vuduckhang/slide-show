import React from 'react'
// lib
import { Route, Routes } from 'react-router-dom'
// routes
import Login from '../features/authentication/login'
import Home from '../features/home'
import Profile from '../features/profile'

const AdminRoute = (props) => {
  return (
    <Routes>
      <Route path={'/'} element={<Home {...props} />} />
      <Route path={'/login'} element={<Login {...props} />} />
      <Route path={'/profile'} element={<Profile {...props} />} />
    </Routes>
  )
}

export default AdminRoute
