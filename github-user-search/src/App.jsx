import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4 text-center">GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;