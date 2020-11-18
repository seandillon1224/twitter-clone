import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Thread {
    _id: ID!
    text: String!
  }

# type Like {
#     _id: ID!
#     threadId: ID!
# }



type User {
    _id: ID!
    name: String!
    handle: String!
    
}

input ThreadInput {
    
    text: String!
  }

  type Mutation {
    addThread(input: ThreadInput): Thread
  }

  type Query {
    allThreads: [Thread]
  }
`;

export default typeDefs;
