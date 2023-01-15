const { gql } = require('apollo-server');

const typeDefs = gql`

    type User{
        id: ID!
        name: String!
        username:String!
        age:Int!
        nationality:Nationalities!
        friends:[User],
        favoriteMovie:[Movies]

    }

    type Movies{
        id:ID!
        name:String!
        yearOfPublication:Int!
        isInTheaters:Boolean!
    }

    enum Nationalities{
        CANADA
        BRAZIL
        AFRIKA
        UNITEDSTATES
        NETHERLANDS
    }

    input CreateUserInput{
        name: String!
        username:String!
        age:Int!
        nationality:Nationalities = BRAZIL
    }
    input UpdateUsernameInput{
        id:ID!
        newUsername:String!
    }

    type Mutation {
        createUser(input:CreateUserInput!):User
        updateUsername(input: UpdateUsernameInput!):User
        deleteUser(id:ID!):User
    }

    type Query{
        users:[User!]!
        user(id:ID!):User!
        movies:[Movies!]!
        movie(name:String!):Movies!
    }
`
module.exports = { typeDefs };
