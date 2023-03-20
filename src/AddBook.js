import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from './api';

function AddBook() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const data = `name=${name}&author=${author}&year=${year}`;
    api.post('/book/add', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        if (response.data === "Saved" ) {
          toast.success('Book added successfully!');
          setName('');
          setAuthor('');
          setYear('');
        } else {
          toast.error('Failed to add book');
        }
      })
      .catch(error => {
        toast.error('Failed to add book');
        console.log(error);
      });
  };

  return (
    <div class="col-md-4">
      <h3 class="text-left mb-1">Add new book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Title:</label>
          <input type="text" class="form-control" id="name" value={name} onChange={event => setName(event.target.value)} />

          <label htmlFor="author">Author:</label>
          <input type="text" class="form-control" id="author" value={author} onChange={event => setAuthor(event.target.value)} />

          <label htmlFor="year">Year:</label>
          <input type="text" class="form-control" id="year" value={year} onChange={event => setYear(event.target.value)} />

          <button class="btn btn-primary btn-block" type="submit">Add Book</button>
        </form>
    </div>
  );
}

export default AddBook;
