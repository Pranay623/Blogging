import React, { useState } from 'react';

function Form({ addPost }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='add'
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
}

export default Form;
