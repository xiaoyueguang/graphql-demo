import React from 'react'
import ReactDom from 'react-dom'

import Router from './router'
import Posts from './posts'
import Post from './post'
import Users from './users'
import User from './user'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'home'
    }
  }
  render () {
    return (
      <Router
        routes={[
          { name: '', component: Posts },
          { name: 'post', component: Post },
          { name: 'users', component: Users },
          { name: 'user', component: User },
        ]}
      />
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))
