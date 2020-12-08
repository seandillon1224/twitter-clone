import { gql } from "apollo-server-micro";

const typeDefs = gql`
  scalar Date

  type User {
    _id: ID!
    name: String!
    avatar: String!
    email: String!
    handle: String!
    settings: Settings!
    posts: [Post]!
    comments: [Comment]!
    createdAt: Date!
  }

  type Settings {
    _id: ID!
    user: ID!
    ads: Boolean!
    active: Boolean!
    dateUpdated: Date
  }

  type Post {
    _id: ID!
    text: String!
    user: User!
    comments: [Comment]!
    active: Boolean!
    createdAt: Date!
  }

  type Comment {
    _id: ID!
    post: Post!
    user: User!
    text: String!
    comments: [Comment]!
    createdAt: Date!
  }

  input CommentInput {
    post: String!
    user: String!
    text: String!
  }

  input PostInput {
    text: String!
    user: ID!
  }

  input UserInput {
    name: String!
    avatar: String
    email: String!
    handle: String!
  }

  type Mutation {
    addPost(input: PostInput!): Post
    addNewUser(input: UserInput!): User
    addComment(input: CommentInput!): Comment
  }

  type Query {
    allPosts: [Post]!
    allUsers: [User]!
    allComments: [Comment]!
    findUserById(_id: ID!): User
    findUsers(queryString: String!): [User]!
  }
`;

export default typeDefs;
