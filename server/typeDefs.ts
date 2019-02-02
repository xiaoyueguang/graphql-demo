import { gql } from 'apollo-server'

export default gql`
  # 注释
  "用户"
  type User {
    id: Int!
    "昵称"
    nickname: String
    "年龄"
    age: Int!
    "发表过的文章"
    posts: [Post]
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

  interface MutationResponse {
    code: Int
    message: String
  }
  input PostInput {
    id: Int
    "标题"
    title: String
    "内容"
    content: String
    "用户ID"
    userId: Int
  }

  type AddPostMutationResponse implements MutationResponse {
    code: Int
    message: String
    data: Post
  }
  type UpdatePostMutationResponse implements MutationResponse {
    code: Int
    message: String
    data: Post
  }
  type DelPostMutationResponse implements MutationResponse {
    code: Int
    message: String
  }
  type AddUserMutationResponse implements MutationResponse {
    code: Int
    message: String
    data: User
  }
  type UpdateUserMutationResponse implements MutationResponse {
    code: Int
    message: String
    data: User
  }
  type DelUserMutationResponse implements MutationResponse {
    code: Int
    message: String
  }

  input UserInput {
    id: Int
    "昵称"
    nickname: String
    "年龄"
    age: Int
  }

  type Mutation {
    "添加文章"
    addPost (post: PostInput): AddPostMutationResponse
    "修改文章"
    updatePost (post: PostInput): UpdatePostMutationResponse
    "删除文章"
    delPost (id: Int): DelPostMutationResponse
    "添加用户"
    addUser (user: UserInput): AddUserMutationResponse
    "修改用户"
    updateUser (user: UserInput): UpdateUserMutationResponse
    "删除用户"
    delUser (id: Int): DelUserMutationResponse
  }
`