import ApolloClient from 'apollo-boost'
import Posts from './gql/posts.gql'
import Post from './gql/post.gql'
import Users from './gql/users.gql'
import User from './gql/user.gql'
import PostMutation from './gql/postMutation.gql'
import DelPostMutation from './gql/delPostMutation.gql'

const client = new ApolloClient({
  uri: '//127.0.0.1:7000',
  cache: false
})


export function fetchPosts (refresh) {
  if (refresh) {
    return new Promise(async resolve => {
      // 清除缓存. 强制请求
      await client.clearStore()
      resolve(client.query({ query: Posts }))
    })
  }
  return client.query({ query: Posts })
}

export function fetchPost (id) {
  return client.query({ query: Post, variables: { id } })
}

export function fetchUsers () {
  return client.query({ query: Users })
}

export function fetchUser (id) {
  return client.query({ query: User, variables: { id } })
}
export function addPost ({ title, content, userId }) {
  return client.mutate({ mutation: PostMutation, variables: {
    post: {
      title, content, userId
    }
  } })
}
export function delPost (id) {
  return client.mutate({ mutation: DelPostMutation, variables: { id } })
}