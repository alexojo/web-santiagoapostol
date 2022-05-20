import React from 'react'
import { Navigate } from 'react-router-dom'
 
export const PublicRoute = ({ children, uid }) => {
  return !!uid
    ? <Navigate to='/login' />
    : children
 
}