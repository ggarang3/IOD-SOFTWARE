import React from 'react';
import { useParams } from 'react-router-dom';

const posts = {
  1: { title: 'Post 1', content: 'This is the content for Post 1.' },
  2: { title: 'Post 2', content: 'This is the content for Post 2.' },
  3: { title: 'Post 3', content: 'This is the content for Post 3.' },
};

function Post() {
  const { id } = useParams();  // Get the post id from the URL
  const post = posts[id];      // Fetch the post from the mock data

  if (!post) {
    return <h2>Post not found</h2>;  // If the post doesn't exist, show this message
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
