import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Example logic to check authentication, you can replace it with actual logic
    const token = localStorage.getItem('authToken');  // Example check from localStorage
    setIsAuthenticated(!!token);  // Update authentication status
  }, []);

  return { isAuthenticated };
};