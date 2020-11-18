import { ApolloServer } from 'apollo-server-micro';
import connectDB from 'lib/mongoose'
import Query from 'lib/GQL/resolvers/Queries'
import Mutation from 'lib/GQL/resolvers/Mutations'
import {Date} from 'lib/GQL/resolvers/Scalars'
import typeDefs from 'pages/api/GQL/typeDefs'
import db  from 'lib/models'

const resolvers = {
    Query,
    Mutation,
    Date
};

const apolloServer = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    
    context: (req) => ({...req, db}) 
});

export const config = {
    api: {
        bodyParser: false
    }
};

const server = apolloServer.createHandler({ path: '/api/graphql' });
export default connectDB(server)