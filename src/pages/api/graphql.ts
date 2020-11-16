import { ApolloServer } from 'apollo-server-micro';
import connectDB from 'lib/mongoose'
import Query from 'lib/GQL/resolvers/Queries'
import Mutation from 'lib/GQL/resolvers/Mutations'
import typeDefs from 'pages/api/GQL/typeDefs'

const resolvers = {
    Query,
    Mutation
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
    api: {
        bodyParser: false
    }
};

const server = apolloServer.createHandler({ path: '/api/graphql' });
export default connectDB(server)