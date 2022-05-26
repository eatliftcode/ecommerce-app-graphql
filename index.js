const {ApolloServer, gql} = require("apollo-server");

const typeDefs = gql`
    type Query {
        hello: String!
        products: [Product!]!
    }

    type Product{
        name: String
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
    }
`

const resolvers = {
    Query: {
        hello: () =>{
            return "World!"
        },
        products: () =>{
            return [{
                name: "Bike",
                description: "description of the bike",
                quantity: 20,
                price: 2.2,
                onSale: true
            }]
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url})=>{
    console.log(`Server running at ${url}`)
})