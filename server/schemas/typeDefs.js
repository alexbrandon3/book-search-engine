const typeDefs = gql`
type User {
    _id: ID,
    username: String
    email: String
    bookCount: Integer
    savedBooks: [Book]
}

type Book {
    bookId: String
    author: [String]
    description: String
    Title: String
    Image: String
    Link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(thoughtId: ID!): Book
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!): Auth
    login(email: String!): Auth
  }

`
