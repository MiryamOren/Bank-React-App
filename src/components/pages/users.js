/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
const Users = ({url}) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(url + '/users');
      setUsers(res);
    }
    getUsers()
  }, []);

  const usersRender = () => {
    return users.map(user => {
      return (
        <div key={user.id}>
          <p>ID: {user._id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )
    })
  }
  return (
    <div>
      {usersRender()}
    </div>
  );
}

export default Users;