import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();  // Retrieve the 'id' from the URL
  
  return (
    <div>
      <h2>Blog Post {id}</h2>
      {/* Here you would fetch data or display the content based on the 'id' */}
      <p>This is the content of blog post with ID: {id}</p>
    </div>
  );
}

export default BlogPost;