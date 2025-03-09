import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from '.components/Profile';  // Make sure to import Profile if you haven't already
import BlogPost from '.components/BlogPost'; // Import the BlogPost component
import ProtectedRoute from '.components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div>
        <h1>React Router Advanced Example</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* Dynamic Blog Post Route */}
          <Route path="/blog/:id" element={<BlogPost />} />
          
          {/* Protected Route for Profile */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

export default App;