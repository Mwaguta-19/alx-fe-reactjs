import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the queryClient to the entire app using QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;