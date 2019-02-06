import React from 'react'

import { fetchPost } from './api'
import { Link } from './router'

export default class Post extends React.Component {
  constructor () {
    super()
    this.state = {
      id: -1,
      title: '',
      content: '',
      user: {
        id: -1,
        nickname: ''
      }
    }
  }
  async componentDidMount () {
    const { data } = await fetchPost(Number(this.props.id))
    this.setState(data.post)
  }
  render () {
    const { title, content, user } = this.state
    return (
      <div>
        <h1>{title}</h1>
        作者: <Link name='user' id={user.id}>{user.nickname}</Link>
        <p>{content}</p>
      </div>
    )
  }
}
