const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('savedBooks');
          },
          user: async (parent, { username }) => {
            return User.findOne({ username }).populate('savedBooks');
          },
          savedBooks: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Thought.find(params).sort({ createdAt: -1 });
          },
          me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('savedBooks');
            }
            throw new AuthenticationError('You need to be logged in!');
          },
    },
    Mutation: {
        addUser: async (parent, { username, email }) => {
            const user = await User.create({ username, email });
            const token = signToken(user);
            return { token, user };
          },
          login: async (parent, { email }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
    }
}