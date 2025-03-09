import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { username } = useParams();
  return <div><h2>User Profile: {username}</h2></div>;
}

export default UserProfile;