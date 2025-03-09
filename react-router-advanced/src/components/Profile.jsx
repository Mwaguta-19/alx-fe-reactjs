import React from 'react';
import { Route, Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

function ProfileDetails() {
  return <div><h3>Profile Details</h3></div>;
}

function ProfileSettings() {
  return <div><h3>Profile Settings</h3></div>;
}

export default Profile;