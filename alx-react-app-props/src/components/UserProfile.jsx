import React, { useContext } from 'react'; 
import UserContext from '../UserContext'; 




function UserProfile() {
  // Use the useContext hook to consume the context
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
