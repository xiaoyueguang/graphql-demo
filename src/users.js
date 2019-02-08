import React, { useState, useEffect } from 'react'
import { fetchUsers } from './api'
import { Link } from './router'

function useUsers () {
  const [ users, setUsers ] = useState([])
  if (users.length > 0) return users
  fetchUsers().then(({ data }) => {
    setUsers(data.users)
  })
  return users
}

export default function Users () {
  const users = useUsers()
  return users.map((user, index) => (
    <div key={index}>
      <Link name="user" id={user.id}>{user.id}. {user.nickname}</Link>
    </div>
  ))
}