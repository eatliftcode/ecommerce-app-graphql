const {ApolloServer, gql} = require("apollo-server");
const { products,categories } = require("./data");

const typeDefs = gql`
    type Query {
        products: [Product!]!
        product(id: ID!): Product
    }

    type Product{
        name: String
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
    }
`

const resolvers = {
    Query: {
        products: () => products,
        product: (parent, args, context) => products.find(x => x.id === args.id)
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url})=>{
    console.log(`Server running at ${url}`)
})