import React from 'react'
import ReactDom from 'react-dom'
// import Api from './api'
import Router, { Route } from './router'
import Posts from './posts'
import Post from './post'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'home'
    }
  }
  render () {
    return (
      <Router>
        <Route name='' component={Posts} />
        <Route name='book' component={Post} />
      </Router>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))
