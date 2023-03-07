
const typeDefs = `#graphql 
    
    enum GangerEnum {
        Female
        Male
    }

    input UserInput {
        firstName: String!
        lastName: String!
        gander: GangerEnum!
        phone: String!
        email: String!
        isMarried: Boolean
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        gander: GangerEnum!
        phone: String!
        email: String!
        isMarried: Boolean
    }

    type Post {
        id: ID!
        title: String!
        description: String!
        user: User!
    }

    type Query {
        users: [User!]!
        user(id: ID!):User
        posts: [Post!]!
        post(id: ID!):Post
    }

    type Mutation {
        addUser(input: UserInput):User
    }
`

module.exports = typeDefs;