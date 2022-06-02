import { gql } from "apollo-server"
export const typeDefs = gql`
    type Query {
        products(filter: ProductsFiterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Product{
        id: ID!
        name: String
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        category: Category!
        reviews: [Review!]!
    }

    type Category{
        id: ID!
        name: String!
        products(filter: ProductsFiterInput): [Product!]!
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }

    input ProductsFiterInput {
        onSale: Boolean
    }
`
