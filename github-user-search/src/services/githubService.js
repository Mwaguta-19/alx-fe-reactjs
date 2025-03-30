import axios from 'axios';

// Function to fetch user data from GitHub API with advanced filters
export const fetchUserData = async (username, location, minRepos) => {
  const query = buildQuery(username, location, minRepos);
  
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  
  return response.data; // Return the list of users matching the query
};

// Function to construct the query string
const buildQuery = (username, location, minRepos) => {
  let query = `in:login ${username}`;
  
  if (location) {
    query += ` location:${location}`;
  }
  
  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }
  
  return query;
};