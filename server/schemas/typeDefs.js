const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
        bookCount: Int
    }
    
    type Book {
        authors: [String]
        description: String!
        bookId: String!
        image: String!
        link: String!
        title: String!
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        userById(_id: ID!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: BookInput!): User
        removeBook(bookId: String!): User
    }

    input BookInput {
        bookId: String!
        authors: [String]
        title: String!
        description: String!
        image: String!
        link: String!
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;