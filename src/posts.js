import React from 'react'

import { fetchPosts } from './api'
import { Link } from './router'

const Post = props => {
  const { data } = props
  return (
    <div style={{ borderBottom: '1px solid #eee' }}>
      <h3>标题: {data.title}</h3>
      <h4>作者: <Link name="user" id={data.user.id}>{data.user.nickname}</Link></h4>
      <Link name="book" id={data.id}>点击查看详情</Link>
    </div>
  )
}

export default class Posts extends React.Component {
  constructor () {
    super()
    this.state = {
      posts: []
    }
  }
  async componentDidMount () {
    const { data } = await fetchPosts()
    this.setState({
      posts: data.posts
    })
  }
  render () {
    const posts = this.state.posts
    return (
      posts.map(post => (
        <Post data={post} key={post.id} />
      ))
    )
  }
}
