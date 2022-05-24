import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
 
export const PrivateRoute = ({ children, uid }) => {
  
    const { pathname, search } = useLocation();
      
    localStorage.setItem('lastPath', pathname + search );

    return !!uid
        ? children
        : <Navigate to='/login' />
}