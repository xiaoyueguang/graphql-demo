import React, { useState, useEffect } from 'react'
import { fetchPosts, delPost } from './api'
import { Link } from './router'

const Post = props => {
  const { data } = props
  return (
    <div style={{ borderBottom: '1px solid #eee' }}>
      <h3>标题: {data.title}</h3>
      <h4>作者: <Link name="user" id={data.user.id}>{data.user.nickname}</Link></h4>
      <Link name="post" id={data.id}>点击查看详情</Link>
      <br />
      <a href="#" onClick={() => {
        delPost(1).then(() => {
          props.refresh(true)
        })
      }}>删除</a>
    </div>
  )
}

export default function Posts () {
  const [ posts, setPosts ] = useState([])
  function refresh (refresh) {
    fetchPosts(refresh).then(({ data }) => {
      setPosts(data.posts)
    })
  }
  useEffect(() => {
    refresh()
  }, [ posts ])

  return (
    <>
      <Link name='addPost'>添加文章</Link>
      <br />
      <Link name='users'>用户列表</Link>
      {
        posts.map(post => (
          <Post data={post} key={post.id} refresh={refresh} />
        ))
      }
    </>
  )
}
