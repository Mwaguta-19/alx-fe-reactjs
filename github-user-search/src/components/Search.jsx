import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API call function

const Search = () => {
  const [username, setUsername] = useState('');  // State to store the username
  const [user, setUser] = useState(null);        // State to store the user data
  const [loading, setLoading] = useState(false); // State to handle loading
  const [error, setError] = useState('');        // State for error messages

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null); // Reset the user data on new search

    try {
      const data = await fetchUserData(username); // Fetch user data from GitHub
      setUser(data); // Set the user data
    } catch (err) {
      setError("Looks like we can't find the user."); // Error handling
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search for a GitHub username"
          className="px-4 py-2 border border-gray-300 rounded"
        />
        <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>} {/* Display loading message */}

      {error && <p>{error}</p>} {/* Display error message */}

      {user && !loading && !error && (
        <div className="user-info">
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full" />
          <h2 className="text-2xl">{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;