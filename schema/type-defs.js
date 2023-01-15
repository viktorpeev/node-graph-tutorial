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

    type Query{
        users:[User!]!
        user(id:ID!):User!
        movies:[Movies!]!
        movie(yearOfPublication:Int!):Movies!
    }
`
module.exports = { typeDefs };
