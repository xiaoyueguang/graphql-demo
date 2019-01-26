import { ApolloServer,  } from 'apollo-server'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(7000).then(({ url }) => {
  console.log(url)
})