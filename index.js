import { ApolloServer, gql } from "apollo-server";
import { products, categories } from "./data.js";

const typeDefs = gql`
    type Query {
        products: [Product!]!
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
    }

    type Category{
        id: ID!
        name: String!
    }
`

const resolvers = {
    Query: {
        products: () => products,
        product: (parent, args, context) => products.find(x => x.id === args.id),
        categories: () => categories,
        category: (parent, args, context) => categories.find(x => x.id === args.id)
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url})=>{
    console.log(`Server running at ${url}`)
})