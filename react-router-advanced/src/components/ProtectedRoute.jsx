import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Change this to your actual authentication logic
  
  if (!isAuthenticated) {
    // If the user is not authenticated, redirect to the home page
    return <Navigate to="/" />;
  }

  return children;  // Render the child components if the user is authenticated
}
