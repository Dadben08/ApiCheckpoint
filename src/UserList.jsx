import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching the user data:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333' }}>User List</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {listOfUser.map(user => (
          <li key={user.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
            <strong>{user.name}</strong> ({user.username})
            <br />
            <a href={`mailto:${user.email}`} style={{ color: '#007BFF' }}>{user.email}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
