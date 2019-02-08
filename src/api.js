import ApolloClient from 'apollo-boost'
// import gql from 'graphql-tag'
import Posts from './gql/posts.gql'
import Post from './gql/post.gql'
import Users from './gql/users.gql'

const client = new ApolloClient({
  uri: '//127.0.0.1:7000'
})

export function fetchPosts () {
  return client.query({ query: Posts })
}

export function fetchPost (id) {
  return client.query({ query: Post, variables: { id } })
}

export function fetchUsers () {
  return client.query({ query: Users })
}
