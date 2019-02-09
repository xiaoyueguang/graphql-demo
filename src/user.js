import React, { useState } from 'react'
import { fetchUser } from './api'
import { Link } from './router'


export default function User () {
  const [ user, setUser ] = useState({
    id: -1,
    nickname: '',
    age: '',
    posts: []
  })
  fetchUser(1).then(({ data }) => {
    console.log(data)
    setUser(data.user)
  })
  return (
    <>
      <h1>用户: {user.nickname}</h1>
      <p>年龄: {user.age}</p>
      <h4>发表过的文章: </h4>
      {
        user.posts.map(post => (
          <div key={post.id}>
            <Link name='post' id={post.id}>{post.title}</Link>
          </div>
        ))
      }
    </>
  )
}