import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';  // Assuming you have this hook

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Get authentication status from the hook
  
  if (!isAuthenticated) {
    // If the user is not authenticated, redirect to the home page
    return <Navigate to="/" />;
  }

  return children;  // Render the child components if the user is authenticated
}

export default ProtectedRoute;