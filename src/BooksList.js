import React, { useState, useEffect } from 'react';
import api from './api';

function BooksList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/book/all')
      .then(response => {
        setData(response.data.reverse());
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
  <div className="mt-5">
		<table className="table table-striped table-hover">
			<thead>
			  <tr>
			    <th>Title</th>
			    <th>Author</th>
			    <th>Year</th>
			  </tr>
			</thead>
			<tbody>
			  {data.map(item => (
			    <tr key={item.id}>
			      <td>{item.name}</td>
			      <td>{item.author}</td>
			      <td>{item.year}</td>
			    </tr>
			  ))}
			</tbody>
		</table>
	</div>
  );
}

export default BooksList;