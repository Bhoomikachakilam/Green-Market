import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists

  const getTokenPayload = () => {
    const token = localStorage.getItem('token');
    if (token) {
      // Decode the token payload
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const payload = JSON.parse(window.atob(base64));
      return payload;
    }
    return null;
  };

  const tokenPayload = getTokenPayload();
  const userRole = tokenPayload ? tokenPayload.role : null;

  return isAuthenticated && userRole === rest.role ? (
    <Route {...rest} element={<Element />} />
  ) : (
    <Navigate to="/login" />
  );
  
};

export default ProtectedRoute;
