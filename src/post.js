import React from 'react'

import { fetchPost } from './api'
import { Link } from './router'

export default class Post extends React.Component {
  componentDidMount () {
    fetchPost(1)
  }
  render () {
    return (
      <div></div>
    )
  }
}
