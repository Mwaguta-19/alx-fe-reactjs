// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API call function

const Search = () => {
  const [username, setUsername] = useState('');  // State to store the username
  const [location, setLocation] = useState('');  // State to store the location
  const [minRepos, setMinRepos] = useState('');  // State to store the minimum repositories count
  const [userResults, setUserResults] = useState([]); // State to store the search results
  const [loading, setLoading] = useState(false); // State to handle loading
  const [error, setError] = useState('');        // State for error messages

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserResults([]); // Clear previous results

    try {
      const data = await fetchUserData(username, location, minRepos); // Fetch data based on advanced criteria

      if (data.message === 'Not Found') {
        setError("Looks like we can't find the user.");
      } else {
        setUserResults(data.items); // Save multiple users if available
      }
    } catch (err) {
      setError("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="mb-4 max-w-lg mx-auto space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search for a GitHub username"
          className="w-full p-2 border border-gray-300 rounded"
        />
        
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="w-full p-2 border border-gray-300 rounded"
        />
        
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min Repositories"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>} {/* Display loading message */}

      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

      {userResults.length > 0 && !loading && !error && (
        <div className="user-info">
          <h2 className="text-2xl mb-4">Search Results</h2>
          <ul>
            {userResults.map((user) => (
              <li key={user.id} className="mb-4 p-4 border-b border-gray-300">
                <div className="flex items-center">
                  <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl">{user.login}</h3>
                    <p className="text-sm text-gray-500">{user.location || 'Location not available'}</p>
                    <p className="text-sm text-gray-500">Repos: {user.public_repos}</p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      Visit Profile
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
