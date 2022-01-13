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
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String!): User
    books(title: String): [Book]
    book(title: String): Book
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!): Auth
    login(email: String!): Auth
  }

`
