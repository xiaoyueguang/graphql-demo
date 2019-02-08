import React from 'react'
import ReactDom from 'react-dom'

import Router from './router'
import Posts from './posts'
import Post from './post'
import Users from './users'

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
          { name: 'book', component: Post },
          { name: 'users', component: Users },
        ]}
      />
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))
