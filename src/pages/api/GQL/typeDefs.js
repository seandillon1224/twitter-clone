import { gql } from "apollo-server-micro";

const typeDefs = gql`

  type User {
    id: ID!
    joinedDate: Date!
    name: String!
    avatar: String!
    email: String!
    handle: String!
    settings: Settings!
    posts: [Posts]!
    comments: [Comments]!
  }

  type Settings {
    _id: ID!
    user: ID!
    ads: Boolean!
    activated: Boolean!
    dateUpdated: Date
  }

  type Posts {
    _id: ID!
    own: Boolean!
    user: ID!
    text: String!
    comments: [Comments]!
    date: Date!
  }

  type Comments {
    _id: ID!
    post: ID!
    user: ID!
    text: String!
    comments: [Comments]!
    date: Date!
  }

  input PostInput {
    id: ID!
    text: String!
  }

  type Mutation {
    addPost(input: PostInput): Post
  }

  type Query {
    allPosts: [Post]
  }
`;

export default typeDefs;
