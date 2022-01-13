import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!) {
    login(email: $email) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!) {
    addUser(username: $username, email: $email) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: String!, $author: [String!], $description: String!, $title: String!, $image: String!, $link: String!) {
    saveBook(bookId: $bookId, author: $author, description: $description, title: $title, image: $image, link: $link) {
      _id
      author
      bookId
      description
      title
      image
      link
    }
  }
`;
