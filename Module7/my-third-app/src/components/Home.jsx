import React from 'react';
import { Link } from 'react-router-dom';

const posts = {
  1: { title: 'Post 1' },
  2: { title: 'Post 2' },
  3: { title: 'Post 3' },
};

function Home() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {Object.keys(posts).map(id => (
          <li key={id}>
            <Link to={`/post/${id}`}>{posts[id].title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
