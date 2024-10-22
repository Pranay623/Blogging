import { useState, useEffect } from 'react'
import './App.css'
import  Header  from './components/header/Header'
import Hero from './components/hero/Hero'
import Form from './components/Form/Form'
import PostList from './components/Postlist/Postlist'


function App() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  }, [posts]);


  const addPost = (title, description) => {
    const newPost = { id: Date.now(), title, description };
    setPosts([...posts, newPost]);
  };

 
  const deletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    

    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <>
    <div>
  <Header />
  <div id='hero'><Hero /></div>
  <div className='blog'> 
    <h1>Blogs</h1>
    <Form addPost={addPost} />
    <PostList posts={posts} deletePost={deletePost} />
  </div>
</div>

    </>
  )
}

export default App
