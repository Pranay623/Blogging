import React from 'react';

function PostList({ posts, deletePost }) {
  return (
    <div>
      <h2>Posts</h2>
      <ul className='ul'>
        {posts.map((post) => (
          <li className='li' key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default PostList;
