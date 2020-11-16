import { gql } from 'apollo-server-micro'

const typeDefs = gql`
type Thread {
    _id: ID!
    text: String!
}

input Thread {
    
    text: String!
}

type Mutation {
    addThread(input: ThreadInput): Thread
}

type Query{
    allThreads: [Thread]
}
`

export default typeDefs