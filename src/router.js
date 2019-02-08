import React from 'react'

export class Router extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
    this.info = {}
    this.routes = {}
    this.components = {}
  }

  resolveHash () {
    const info = {}
    const hash = location.hash.substr(1)
    const routes = hash.split('&').map(info => info.split('='))
    routes.forEach(([key, val]) => {
      info[key] = val
    })
    this.info = info
    this.setState({
      name: info.name || ''
    })
  }

  addRoute () {
    this.props.routes.forEach(({ name, component }) => {
      this.components[name] = component
    })
  }

  componentDidMount () {
    this.addRoute()
    this.resolveHash()
    window.onhashchange = () => {
      this.resolveHash()
    }
  }

  render () {
    const Component = this.components[this.state.name]
    if (!Component) {
      return <div>404</div>
    }
    return <Component {...this.info} />
  }
}

export class Route extends React.Component {
}

export class Link extends React.Component {
  render () {
    return <a href={'#' + hashInit(this.props)}>{this.props.children}</a>
  }
}

function hashInit (props) {
  const route = []
  for (let key in props) {
    if (key !== 'children') {
      route.push(`${key}=${props[key]}`)
    }
  }
  return route.join('&')
}
export function hash (props) {
  const hash = hashInit(props)
  location.hash = hash
}

export default Router
