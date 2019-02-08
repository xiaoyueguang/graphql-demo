import React, { useState } from 'react'

import { fetchPost } from './api'
import { Link } from './router'

export default function Post (props) {
  const [ post, setPost ] = useState({
    id: -1,
    title: '',
    content: '',
    user: {
      id: -1,
      nickname: ''
    }
  })
  fetchPost(Number(props.id))
    .then(({ data }) => {
      setPost(data.post)
    })
  return (
    <div>
      <h1>{post.title}</h1>
      作者: <Link name='user' id={post.user.id}>{post.user.nickname}</Link>
      <p>{post.content}</p>
    </div>
  )
}