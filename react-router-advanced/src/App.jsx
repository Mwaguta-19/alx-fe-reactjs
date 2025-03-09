import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from '.components/Profile';

function App() {
  return (
    <Router>
      <div>
        <h1>React Router Advanced Example</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/*" element={<Profile />} />
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