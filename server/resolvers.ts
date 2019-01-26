import { IResolvers } from 'apollo-server'
import { Post, User, Users, Posts } from './data'

interface Args {
  id?: number;
  nickname?: string;
}
interface Parent {
}

const resolvers: IResolvers = {
  Query: {
    posts () {
      return Posts.map(post => {
        post.user = Users.find(user => user.id === post.userId)
        return post
      })
    },

    post (parent: Parent, args: Args) {
      const post = <Post>Posts.find(post => post.id === args.id)
      post.user = Users.find(user => user.id === post.userId)
      return post
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
  }
}

export default resolvers
