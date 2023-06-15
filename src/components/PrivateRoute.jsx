import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  const location = useLocation();
  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ path: location.pathname }} />
  );
};
export default PrivateRoute;
