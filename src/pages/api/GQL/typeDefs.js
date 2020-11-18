import { gql } from "apollo-server-micro";

const typeDefs = gql`

scalar Date

  type User {
    _id: ID!
    # use created_at?
    # joinedDate: Date!
    name: String!
    avatar: String!
    email: String!
    handle: String!
    settings: Settings!
    posts: [Post]!
    comments: [Comments]!
  }

  type Settings {
    _id: ID!
    user: ID!
    ads: Boolean!
    activated: Boolean!
    # dateUpdated: Date
  }

  type Post {
    _id: ID!
    own: Boolean!
    user: ID!
    text: String!
    comments: [Comments]!
    # date: Date!
  }

  type Comments {
    _id: ID!
    post: ID!
    user: ID!
    text: String!
    comments: [Comments]!
    # date: Date!
  }

  input PostInput {
    text: String!
    user: ID!

  }

  input CreateUserInput {
    name: String!
    avatar: String
    email: String!
    handle: String!
    
  }

  type Mutation {
    addPost(input: PostInput!): Post
    addNewUser(input: CreateUserInput) : User
  }

  type Query {
    allPosts: [Post]
    allUsers: [User]!
  }
`;

export default typeDefs;
