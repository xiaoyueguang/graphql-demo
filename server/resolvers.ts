import { IResolvers } from 'apollo-server'
import { Post, User, Users, Posts } from './data'

interface Args {
  id?: number;
  nickname?: string;
  content?: string;
  title?: string;
  userId?: number;
}
interface PostArgs {
  post: Post;
}
interface UserArgs {
  user: User;
}
interface IdArgs {
  id: number;
}
interface MutationResponse<T = any> {
  code: number;
  message: string;
  data?: T;
}

function success <Data> (data: Data, message: string = '成功'): MutationResponse<Data> {
  return {
    code: 0,
    message,
    data
  }
}
function error <Data> (data: Data, message: string = '失败'): MutationResponse<Data> {
  return {
    code: 1,
    message,
    data
  }
}

interface Parent {
}

const resolvers: IResolvers = {
  Query: {
    posts () {
      return Posts
    },
    post (parent: Parent, args: Args) {
      return <Post>Posts.find(post => post.id === args.id)
    },
    async users () {
      return Users
    },
    async user (parent: Parent, args: Args) {
      return <User>Users.find(user => {
        if (args.id && args.nickname) {
          return user.id === args.id && user.nickname === args.nickname
        }
        if (args.id) return user.id === args.id
        if (args.nickname) return user.nickname === args.nickname
        return false
      })
    }
  },
  Post: {
    async user (Post: Post, args: Args, context: any, info: any) {
      return Users.find(user => user.id === Post.userId)
    }
  },
  User: {
    async posts (user: User) {
      return Posts.filter(post => post.userId === user.id)
    }
  },
  Mutation: {
    addPost (parent: any, args: PostArgs): MutationResponse<Post> {
      const post = {
        id: Posts.length + 1,
        title: <string>args.post.title,
        content: <string>args.post.content,
        userId: <number>args.post.userId
      }
      Posts.push(post)
      return success(post)
    },
    updatePost (parent: any, args: PostArgs): MutationResponse<Post | object> {
      const post = Posts.find(({ id }) => id === args.post.id)
      if (post) {
        post.title = <string>args.post.title
        post.content = <string>args.post.content
        return success(post)
      } else {
        return error({})
      }
    },
    async delPost (parent: any, args: IdArgs): Promise<MutationResponse> {
      const index = Posts.findIndex(post => post.id === args.id)
      Posts.splice(index, 1)
      return success({})
    },
    async addUser (parent: any, args: UserArgs): Promise<MutationResponse<User>> {
      const user = {
        id: Users.length + 1,
        nickname: <string>args.user.nickname,
        age: <number>args.user.age
      }
      Users.push(user)
      return success(user)
    },
    async updateUser (parent: any, args: UserArgs): Promise<MutationResponse<User | object>> {
      const user = Users.find(({ id }) => id === args.user.id)
      if (user) {
        user.nickname = <string>args.user.nickname
        user.age = <number>args.user.age
        return success(user)
      } else {
        return error({})
      }
    },
    async delUser (parent: any, args: IdArgs): Promise<MutationResponse> {
      const index = Users.findIndex(user => user.id === args.id)
      Users.splice(index, 1)
      return success({})
    }
  }
}

export default resolvers
