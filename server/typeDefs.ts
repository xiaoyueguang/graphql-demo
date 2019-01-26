import { gql } from 'apollo-server'

export default gql`
  "用户"
  type User {
    id: Int!
    "昵称"
    nickname: String
    "年龄"
    age: Int!
  }
  "文章"
  type Post {
    id: Int!
    "标题"
    title: String
    "内容"
    content: String
    "用户"
    user: User
  }
  type Query {
    "获取文章列表"
    posts: [Post]
    "按ID获取文章"
    post (id: Int!): Post
    "获取用户列表"
    users: [User]
    "按ID或昵称获取用户信息"
    user (nickname: String, id: Int): User
  }
`