import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Simulate user authentication
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;